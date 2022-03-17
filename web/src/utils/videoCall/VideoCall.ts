import {getMediaStream} from "../../containers/UserVideo/getMediaStream";
import {socket, SocketEvent} from "../../socket";
import {Participant} from "../../models";
import Peer from "simple-peer";

let videoCall: VideoCall;

export class VideoCall {
  private _peers: { [id in string]: Peer.Instance } = {};
  private _mediaStream: MediaStream | undefined;
  private _errorStatus: string | undefined;
  private _io: IOClient;
  private _callbacks: any[] = [];

  constructor(io: IOClient) {
    this._io = io;
    this._obtainMediaStream();
    this._onLeaveHandler();
  }

  on(event: string, fn: (...args: any[]) => void) {
    this._callbacks.push({event, fn});
  }

  getPeerById(peerId: string) {
    return this._peers[peerId];
  }

  muteAudio(mute: boolean) {
    this._io.emit(SocketEvent.MuteUserAudio, {mute});
    this._mediaStream?.getAudioTracks().forEach(track => track.enabled = mute);
    this._emit('media', {stream: this._mediaStream, audio: mute})
  }

  muteVideo(mute: boolean) {
    this._io.emit(SocketEvent.MuteUserVideo, {mute});
    this._mediaStream?.getVideoTracks().forEach(track => track.enabled = mute);
    this._emit('media', {stream: this._mediaStream, video: mute})
  }

  mediaStream() {
    return this._mediaStream;
  }

  joinCall(peerId: string) {
    this._io.emit(SocketEvent.CallerJoining);
    this._io.on(SocketEvent.AllCallers, (items: Participant[]) => {
      this._onReceiveCallers(items, peerId);
    });
    this._io.on(SocketEvent.CallerJoined, (data: any) => {
      if (!this._hasCaller(data.callerID)) {
        const peer = new Peer({
          config: {},
          initiator: false,
          trickle: true,
          stream: this._mediaStream,
        });

        peer.on("signal", signal => {
          this._io.emit(SocketEvent.ReturnSignal, {
            signal,
            callerID: data.callerID
          })
        })

        peer.signal(data.signal);

        return peer;
      } else {
        if (this._peers[data.callerID]) {
          this._peers[data.callerID].signal(data.signal);
        }

        console.log('exist', data)
      }
    });
    this._io.on(SocketEvent.ReceiveReturnedSignal, (data: any) => {
      const peer = this._peers[data.id]
      if (peer && !peer.destroyed) {
        peer.signal(data.signal);
      }
    });
  }

  private _onLeaveHandler() {
    this._io.on(SocketEvent.LeaveMeeting, (data: any) => {
      if (this._hasCaller(data.id)) {
        this._peers[data.id].destroy();
        delete this._peers[data.id];
      }
    });
  }

  private _onReceiveCallers(items: Participant[], peerId: string) {
    for (const p of items) {
      if (!this._hasCaller(p.id)) {
        const peer = new Peer({
          config: {},
          initiator: true,
          trickle: true,
          stream: this._mediaStream
        });

        /// user.id, currentUser.id, stream
        peer.on("signal", signal => {
          this._io.emit(SocketEvent.SendSignal, {
            userToSignal: p.id,
            callerID: peerId,
            signal
          });
        });

        this._peers[p.id] = peer;
      }
    }
  }

  private _hasCaller(callerId: string) {
    return typeof this._peers[callerId] === 'object';
  }

  private _obtainMediaStream() {
    console.log('Start obtaining media')
    getMediaStream()
      .then(stream => {
        console.log('Media stream obtained')
        this._mediaStream = stream;
      })
      .catch(e => {
        this._errorStatus = e.message;
        console.log(`Can not obtain media: ${e.message}`)
      });
  }

  private _emit(event: string, data: any) {
    for (const i of this._callbacks) {
      if (i.event === event) {
        i.fn(data)
      }
    }
  }

  static make() {
    if (!videoCall) {
      videoCall = new VideoCall(socket);
    }
    return videoCall;
  }
}

interface IOClient {
  on(event: string, fn: (...args: any[]) => void): void;

  emit(event: string, data?: any): void;
}

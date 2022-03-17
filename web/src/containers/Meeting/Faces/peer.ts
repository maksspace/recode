import Peer from "simple-peer";
import {socket, SocketEvent} from "../../../socket";
import {iceServers} from "./config";

const config = {
  iceServers,
  iceTransportPolicy: 'relay'
}

export function createPeer(userToSignal: string, callerID: string, stream: MediaStream) {
  const peer = new Peer({
    config,
    initiator: true,
    trickle: true,
    stream
  });

  peer.on('error', (e: any) => console.log('error', e))

  peer.on("signal", signal => {
    console.log('Signal', signal)
    socket.emit(SocketEvent.SendSignal, {
      userToSignal,
      callerID,
      signal
    });
  })

  return peer;
}

export function addPeer(incomingSignal: any, callerID: string, stream: MediaStream) {
  const peer = new Peer({
    config,
    initiator: false,
    trickle: true,
    stream,
  });

  peer.on('error', (e: any) => console.log('error', e))

  peer.on("signal", signal => {
    socket.emit(SocketEvent.ReturnSignal, {
      signal,
      callerID
    })
  })

  peer.signal(incomingSignal);

  return peer;
}

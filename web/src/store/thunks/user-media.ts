import {Dispatch} from "redux";
import {socket, SocketEvent} from "../../socket";
import {ActionTypes} from "../types";

export const muteUserVideoThunk = (mute: boolean) => (dispatch: Dispatch) => {
  dispatch({
    type: ActionTypes.MuteUserVideo,
    mute
  });
  socket.emit(SocketEvent.MuteUserVideo, {mute});
};

export const muteUserAudioThunk = (mute: boolean) => (dispatch: Dispatch) => {
  dispatch({
    type: ActionTypes.MuteUserAudio,
    mute
  });
};


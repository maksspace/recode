import { Dispatch } from "redux";
import { socket, SocketEvent } from "../../socket";
import { ActionTypes } from "../types";

export const setMeetingLocked = (locked: boolean) => (dispatch: Dispatch) => {
  dispatch({
    type: ActionTypes.SetMeetingLocked,
    locked,
  });
  socket.emit(SocketEvent.SetMeetingLocked, { locked });
};

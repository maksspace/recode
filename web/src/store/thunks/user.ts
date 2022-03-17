import { Dispatch } from "redux";
import { socket, SocketEvent } from "../../socket";
import { ActionTypes } from "../types";

export const setCurrentUserAvatarThunk =
  (avatar: boolean) => (dispatch: Dispatch) => {
    dispatch({
      type: ActionTypes.SetCurrentUserAvatar,
      avatar,
    });
    socket.emit(SocketEvent.SetCurrentUserAvatar, { avatar });
  };

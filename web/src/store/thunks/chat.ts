import {Dispatch} from "redux";
import {socket, SocketEvent} from "../../socket";
import {State} from "../state";
import {ActionTypes} from "../types";

export const sendChatMessageThunk = (data: {
  text?: string;
  attachments?: any[];
}) => (dispatch: Dispatch, getState: () => State) => {
  socket.emit(SocketEvent.ChatMessage, data);
  const state = getState();
  dispatch({
    type: ActionTypes.AddChatMessage,
    data: {
      text: data.text || null,
      attachments: data.attachments || [],
      senderId: state.user.connectionId,
      senderName: state.user.login
    }
  });
};

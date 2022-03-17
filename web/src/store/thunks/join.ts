import {Dispatch} from "redux";
import {socket, SocketEvent} from "../../socket";
import {ActionTypes} from "../types";
import randomColor from "randomcolor";

export const createMeetingThunk = (data: any) => (dispatch: Dispatch) => {
  const meetings = JSON.parse(localStorage.getItem('_reecallapp_local_meetings_list') || '[]');
  meetings.push({
    id: data.id,
    title: data.title,
    createdAt: Date.now()
  });
  localStorage.setItem('_reecallapp_local_meetings_list', JSON.stringify(meetings))
  socket.emit(SocketEvent.CreateMeeting, {
    id: localStorage.getItem('_reecallapp_incognito_id'),
    meetingId: data.id
  });
};

export const joinMeetingThunk = (meetingId: string, login: string, avatar: string) => (dispatch: Dispatch) => {
  const color = randomColor();
  const userId = localStorage.getItem('_reecallapp_incognito_id');
  socket.emit(SocketEvent.JoinMeeting, {
    id: userId,
    avatar,
    meetingId,
    login,
    color
  });

  dispatch({
    type: ActionTypes.JoinMeeting,
    meetingId,
    login,
    color,
    connectionId: userId,
  });

  socket.on(SocketEvent.SyncMeetingState, (data: any) => {
    dispatch({
      type: ActionTypes.SyncMeetingState,
      data
    });
  });

  socket.on(SocketEvent.ParticipantJoined, (data: any) => {
    dispatch({
      type: ActionTypes.ParticipantJoined,
      data
    });
  });

  socket.on(SocketEvent.LeaveMeeting, (data: any) => {
    dispatch({
      type: ActionTypes.LeaveMeeting,
      data
    });
  });

  socket.on(SocketEvent.SetCodeShareTabContent, (data: any) => {
    dispatch({
      type: ActionTypes.SetCodeShareTabContent,
      data
    });
  });

  socket.on(SocketEvent.ChatMessage, (data: any) => {
    dispatch({
      type: ActionTypes.AddChatMessage,
      data
    });
  });

  socket.on(SocketEvent.SetCodeShareTabContent, (data: any) => {
    dispatch({
      type: ActionTypes.SetCodeShareTabContent,
      data
    });
  });

  socket.on(SocketEvent.SetCodeShareCursor, (data: any) => {
    dispatch({
      type: ActionTypes.SetCodeShareCursor,
      data
    });
  });

  socket.on(SocketEvent.SetCodeShareSelection, (data: any) => {
    dispatch({
      type: ActionTypes.SetCodeShareSelection,
      data
    });
  });

  socket.on(SocketEvent.MuteUserAudio, (data: any) => {
    dispatch({
      type: ActionTypes.MuteRemoteUserAudio,
      data
    });
  });

  socket.on(SocketEvent.MuteUserVideo, (data: any) => {
    dispatch({
      type: ActionTypes.MuteRemoteUserVideo,
      data
    });
  });

  socket.on(SocketEvent.SetCodeShareLanguage, (data: any) => {
    dispatch({
      type: ActionTypes.SetCodeShareLanguage,
      language: data.language
    });
  });

  socket.on(SocketEvent.SetMeetingLocked, (data: any) => {
    dispatch({
      type: ActionTypes.SetMeetingLocked,
      locked: data.locked
    });
  });

  socket.on(SocketEvent.SetCodeTypingLocked, (data: any) => {
    dispatch({
      type: ActionTypes.SetCodeTypingLocked,
      id: data.id
    });
  });
};

import {io} from 'socket.io-client';
import {config} from "../config";

export const socket = io(config.apiHost, {transports: ['websocket']});

export enum SocketEvent {
  CreateMeeting = 'CreateMeeting',
  JoinMeeting = "JoinMeeting",
  ParticipantJoined = 'ParticipantJoined',
  LeaveMeeting = "LeaveMeeting",
  SyncMeetingState = 'SyncMeetingState',
  ChatMessage = "ChatMessage",

  SetMeetingLocked = 'SetMeetingLocked',

  SetCodeShareCursor = "SetCodeShareCursor",
  SetCodeShareSelection = 'SetCodeShareSelection',

  SetCodeShareTabContent = 'SetCodeShareTabContent',
  SetCodeTypingLocked = "SetCodeTypingLocked",
  SetCodeShareLanguage = 'SetCodeShareLanguage',

  MuteUserVideo = "MuteUserVideo",
  MuteUserAudio = "MuteUserAudio",

  AddInterviewPlanStep = 'AddInterviewPlanStep',
  DeleteInterviewStep = 'DeleteInterviewStep',
  SetInterviewStepScore = 'SetInterviewStepScore',

  SetCurrentUserAvatar = 'SetCurrentUserAvatar',

  // Faces
  CallerJoining = 'CallerJoining',
  AllCallers = 'AllCallers',
  SendSignal = "SendSignal",
  CallerJoined = "CallerJoined",
  ReturnSignal = "ReturnSignal",
  ReceiveReturnedSignal = "ReceivingReturnedSignal",
}


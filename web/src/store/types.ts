export enum ActionTypes {
  JoinMeeting = 'JoinMeeting',
  ParticipantJoined = 'ParticipantJoined',
  SendMessage = 'SendMessage',
  AddMessage = 'AddMessage',
  AddFileMessage = 'AddFileMessage',
  AddScreen = 'AddScreen',
  SyncMeetingState = 'SyncMeetingState',
  LeaveMeeting = 'LeaveMeeting',
  EditCode = 'EditCode',
  AddCursor = 'AddCursor',
  DeleteCursor = 'DeleteCursor',
  ActiveScreen = 'ActiveScreen',

  SetMeetingLocked = 'SetMeetingLocked',

  AddChatMessage = 'AddChatMessage',

  MuteUserVideo = 'MuteUserVideo',
  MuteUserAudio = 'MuteUserAudio',

  MuteRemoteUserVideo = 'MuteRemoteUserVideo',
  MuteRemoteUserAudio = 'MuteRemoteUserAudio',

  SetCodeShareTheme = 'SetCodeShareTheme',
  SetCodeShareFontSize = 'SetCodeShareFontSize',
  SetCodeShareAutocomplete = 'SetCodeShareAutocomplete',
  SetCodeShareLanguage = 'SetCodeShareLanguage',
  SetCodeTypingLocked = 'SetCodeTypingLocked',


  SetCodeShareTabContent = 'SetCodeShareTabContent',

  SetCodeShareCursor = 'SetCodeShareCursor',
  SetCodeShareSelection = 'SetCodeShareSelection',

  AddInterviewPlanStep = 'AddInterviewPlanStep',
  SetInterviewStepScore = 'SetInterviewStepScore',

  DeleteInterviewStep = 'DeleteInterviewStep',

  SetCurrentUserAvatar = 'SetCurrentUserAvatar'
}

export type Action = {
  type: keyof typeof ActionTypes
  [key: string]: any;
}

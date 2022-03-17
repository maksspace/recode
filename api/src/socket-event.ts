export enum SocketEvent {
  CreateMeeting = "CreateMeeting",
  JoinMeeting = "JoinMeeting",
  ParticipantJoined = "ParticipantJoined",
  LeaveMeeting = "LeaveMeeting",
  SyncMeetingState = "SyncMeetingState",
  ChatMessage = "ChatMessage",

  SetMeetingLocked = "SetMeetingLocked",

  SetCodeShareCursor = "SetCodeShareCursor",
  SetCodeShareSelection = "SetCodeShareSelection",

  SetCodeShareTabContent = "SetCodeShareTabContent",
  SetCodeShareLanguage = "SetCodeShareLanguage",
  SetCodeTypingLocked = "SetCodeTypingLocked",
  SetCurrentUserAvatar = "SetCurrentUserAvatar",
  Disconnecting = "disconnecting"
}

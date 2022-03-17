import {State} from "./state";

// Crated meeting
export const meetingsListSelector = (state: State) => [];
export const templatesSelector = (state: State) => [];

// Meeting
export const isMeetingLockedSelector = (state: State) => state.changesLocked;

// User
export const isHostSelector = (state: State) => state.user.connectionId === state.hostId && state.hostId !== null;
export const isUserJoinedSelector = (state: State) => state.user?.connectionId && state.meetingId;
export const currentUserSelector = (state: State) => ({
  id: state.user.connectionId as string,
  avatar: localStorage.getItem('_reecallapp_current_user_avatar') || '{}',
  login: state.user.login as string,
  color: state.user.color as string,
  audio: state.user.audio,
  video: state.user.video
});
export const hostIdSelector = (state: State) => state.hostId;

// Code share
export const codeShareBusyParticipantSelector = (state: State) => {
  if (state.codeShare.typingId === state.user.connectionId) {
    return null;
  }
  return state.participants.find(p => p.id === state.codeShare.typingId);
};
export const codeShareThemeSelector = (state: State) => state.codeShare.theme;
export const codeShareFontSizeSelector = (state: State) => state.ui.codeShareFontSize;
export const codeShareAutocompleteSelector = (state: State) => state.ui.autocomplete;
export const codeShareLanguageSelector = (state: State) => state.codeShare.language;
export const codeShareCodeSelector = (state: State) => state.codeShare.code;
export const codeShareRemoteCursorsSelector = (state: State) => state.codeShare.cursors;
export const codeShareRemoteSelectionsSelector = (state: State) => state.codeShare.selections;

// Faces
export const isFacesEnabledSelector = (state: State) => state.faces.enabled;
export const facesParticipantsSelector = (state: State) => state.participants;
export const facesParticipantsCountSelector = (state: State) => state.participants.length;
export const facesRemoteParticipantsSelector = (state: State) => state.participants.filter(p => p.id !== state.user.connectionId);

// Chat
export const chatMessagesSelector = (state: State) => state.chat.messages.map(m => ({
  ...m,
  createdAt: new Date(m.createdAt)
}));

// Interview plan
export const interviewPlanVisibleSelector = (state: State) => state.interviewPlan.steps.length > 0;
export const interviewPlanStepsSelector = (state: State) => state.interviewPlan.steps;
export const interviewStepsAvgScoreSelector = (state: State) => {
  if (!state.interviewPlan.steps.length) {
    return 0;
  }

  const scores = state.interviewPlan.steps
    .map(s => s.score)
    .filter(i => i > 0);

  if (!scores.length) {
    return 0;
  }

  const sumScores = scores.reduce((total, i) => total + i, 0);
  return +(sumScores / scores.length).toFixed(1);
};
export const interviewPlanTotalDurationSelector = (state: State) => {
  const totalMinutes = state.interviewPlan.steps.reduce((total, step) => {
    return total + parseInt(step.duration as string)
  }, 0);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes - hours * 60;
  return `${hours}h ${minutes}min`;
}

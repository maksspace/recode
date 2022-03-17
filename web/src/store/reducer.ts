import {Action, ActionTypes} from "./types";
import {initialState} from "./state";
import randomColor from "randomcolor";

export function reducer(state = initialState, action: Action) {
  switch (action.type) {

    case ActionTypes.JoinMeeting:
      return {
        ...state,
        meetingId: action.meetingId,
        user: {
          ...state.user,
          connectionId: action.connectionId,
          login: action.login,
          color: action.color || randomColor()
        }
      };

    case ActionTypes.ParticipantJoined:
      return {
        ...state,
        participants: [
          ...state.participants,
          action.data
        ]
      };

    case ActionTypes.SyncMeetingState:
      return {
        ...state,
        meetingId: action.data.id,
        hostId: action.data.hostId,
        chat: {
          messages: action.data.chatMessages
        },
        participants: action.data.participants,
        codeShare: {
          ...action.data.codeShare,
          typingId: null
        },
        interviewPlan: {
          steps: action.data.plan.steps || []
        }
      };

    case ActionTypes.LeaveMeeting:
      const cursors = state.codeShare.cursors;
      delete cursors[action.data.participantId];
      return {
        ...state,
        participants: state.participants.filter(p => p.id !== action.data.participantId),
        codeShare: {
          ...state.codeShare,
          cursors
        }
      };

    case ActionTypes.SetCodeShareTabContent: {
      return {
        ...state,
        codeShare: {
          ...state.codeShare,
          code: action.data.code
        }
      };
    }

    case ActionTypes.SetCodeShareCursor: {
      const cursors = state.codeShare.cursors || {};
      cursors[action.data.participantId] = action.data.position;
      return {
        ...state,
        codeShare: {
          ...state.codeShare,
          cursors: {
            ...cursors
          }
        }
      };
    }

    case ActionTypes.SetCodeShareSelection: {
      const selections = state.codeShare.selections || {};
      selections[action.data.participantId] = action.data.selection;
      return {
        ...state,
        codeShare: {
          ...state.codeShare,
          selections: {
            ...selections
          }
        }
      };
    }

    case ActionTypes.AddChatMessage:
      return {
        ...state,
        chat: {
          messages: [
            ...state.chat.messages,
            {
              senderId: action.data.senderId,
              senderName: action.data.senderName,
              text: action.data.text || null,
              attachments: action.data.attachments || [],
              createdAt: new Date().toISOString()
            }
          ]
        }
      };

    case ActionTypes.SetCodeShareTheme:
      return {
        ...state,
        codeShare: {
          ...state.codeShare,
          theme: action.theme
        }
      };

    case ActionTypes.SetCodeShareLanguage:
      return {
        ...state,
        codeShare: {
          ...state.codeShare,
          language: action.language
        }
      };

    case ActionTypes.MuteUserAudio:
      return {
        ...state,
        user: {
          ...state.user,
          audio: action.mute
        }
      };

    case ActionTypes.MuteUserVideo:
      return {
        ...state,
        user: {
          ...state.user,
          video: action.mute
        }
      };

    case ActionTypes.MuteRemoteUserAudio: {
      return {
        ...state,
        participants: state.participants.map(p => {
          return p.id === action.data.participantId ? {...p, audio: action.data.mute} : p;
        })
      };
    }

    case ActionTypes.MuteRemoteUserVideo: {
      return {
        ...state,
        participants: state.participants.map(p => {
          return p.id === action.data.participantId ? {...p, video: action.data.mute} : p;
        })
      };
    }

    // Interview plan
    case ActionTypes.AddInterviewPlanStep: {
      return {
        ...state,
        interviewPlan: {
          ...state.interviewPlan,
          steps: [
            ...state.interviewPlan.steps,
            {
              title: action.data.title,
              duration: action.data.duration,
              description: action.data.description,
              score: 0
            }
          ]
        }
      };
    }

    // Interview plan
    case ActionTypes.SetInterviewStepScore: {
      state.interviewPlan.steps[action.data.index].score = action.data.score;
      return {
        ...state,
        interviewPlan: {
          ...state.interviewPlan,
          steps: [
            ...state.interviewPlan.steps
          ]
        }
      };
    }

    case ActionTypes.DeleteInterviewStep: {
      const steps = [...state.interviewPlan.steps];
      steps.splice(action.data.index, 1);
      return {
        ...state,
        interviewPlan: {
          ...state.interviewPlan,
          steps
        }
      };
    }

    case ActionTypes.SetCodeShareFontSize: {
      return {
        ...state,
        ui: {
          ...state.ui,
          codeShareFontSize: action.size
        }
      };
    }

    case ActionTypes.SetCodeShareAutocomplete: {
      return {
        ...state,
        ui: {
          ...state.ui,
          autocomplete: action.value
        }
      };
    }

    case ActionTypes.SetMeetingLocked: {
      return {
        ...state,
        changesLocked: action.locked
      };
    }

    case ActionTypes.SetCodeTypingLocked: {
      return {
        ...state,
        codeShare: {
          ...state.codeShare,
          typingId: action.id
        }
      };
    }
  }
  return {
    ...state
  }
}

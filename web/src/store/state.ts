export type State = {
  meetingId: string | null;
  hostId: string | null,
  changesLocked: boolean;
  faces: {
    enabled: boolean;
  },
  user: {
    connectionId: string | null;
    login: string | null;
    color: string | null;
    video: boolean;
    audio: boolean;
  };
  codeShare: {
    code: string;
    language: string;
    theme: string;
    typingId: string | null;
    cursors: {
      [participantId: string]: {
        column: number;
        lineNumber: number;
      }
    };
    selections: {
      [participantId: string]: {
        startColumn: number;
        startLineNumber: number;
        endColumn: number;
        endLineNumber: number;
      }
    }
  };
  participants: Array<{
    id: string;
    login: string
    avatar: string
    color: string;
    video: boolean;
    audio: boolean;
  }>;
  chat: {
    messages: Array<{
      senderId: string;
      senderLogin: string;
      text: string;
      attachments: Array<{
        name: string;
        mimeType: string;
        url: string;
        size: number;
      }>;
      createdAt: string
    }>
  };
  interviewPlan: {
    steps: Array<{
      title: string;
      description?: string;
      duration: string;
      score: number;
    }>
  },

  ui: {
    codeShareFontSize: number;
    autocomplete: boolean;
  }
};

export const initialState: State = {
  meetingId: null,
  hostId: null,
  changesLocked: false,
  faces: {
    enabled: false
  },
  user: {
    connectionId: null,
    login: null,
    color: null,
    video: false,
    audio: false
  },
  codeShare: {
    code: '',
    language: 'plaintext',
    theme: 'vs-dark',
    cursors: {},
    selections: {},
    typingId: null
  },
  participants: [],
  chat: {
    messages: []
  },
  interviewPlan: {
    steps: []
  },

  ui: {
    codeShareFontSize: 14,
    autocomplete: false,
  }
};

import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCodeShareTabContentThunk } from "../../../store/thunks";
import { useMonaco } from "@monaco-editor/react";
import {
  codeShareAutocompleteSelector,
  codeShareBusyParticipantSelector,
  codeShareCodeSelector,
  codeShareFontSizeSelector,
  codeShareLanguageSelector,
  codeShareThemeSelector,
  facesRemoteParticipantsSelector,
  isMeetingLockedSelector,
} from "../../../store/selectors";
import { useRemoteCursors } from "./useRemoteCursors";
import { useDebouncedCallback } from "use-debounce";

export function useCodeShareEditor() {
  const dispatch = useDispatch();
  const monaco = useMonaco();
  const participants = useSelector(facesRemoteParticipantsSelector);
  const busyUser = useSelector(codeShareBusyParticipantSelector);
  const theme = useSelector(codeShareThemeSelector);
  const language = useSelector(codeShareLanguageSelector);
  const code = useSelector(codeShareCodeSelector);
  const fontSize = useSelector(codeShareFontSizeSelector);
  const autocomplete = useSelector(codeShareAutocompleteSelector);
  const isReadonly = useSelector(isMeetingLockedSelector);
  const rootRef = useRef<any>();
  const [editor, setEditorInstance] = useState<any>();
  const cursors = useRemoteCursors({ editor, participants });

  const onEditorMounted = (editor: any) => {
    setEditorInstance(editor);
    // let timeout: any = null;
    // let changes: any[] = [];
    // editor.onDidChangeModelContent((data: any) => {
    //   if (timeout) {
    //     clearTimeout(timeout);
    //   }
    //   changes.push(...data.changes)
    //   timeout = setTimeout(() => {
    //     console.log('===== SEND CHANGES ====');
    //     console.log(changes);
    //     changes = [];
    //   }, 150);
    // })
  };

  const onEditorChange = useDebouncedCallback((code: string | undefined) => {
    dispatch(
      setCodeShareTabContentThunk({
        tabIndex: 0,
        code: code as string,
      })
    );
  }, 150);

  return {
    isDarkTheme: theme === "vs-dark",
    theme,
    language,
    code,
    isReadonly,
    rootRef,
    editor,
    onEditorMounted,
    cursors,
    onEditorChange,
    busyUserName: busyUser?.login,
    editorOptions: {
      quickSuggestions: {
        other: false,
        comments: false,
        strings: false,
      },
      parameterHints: {
        enabled: false,
      },
      suggestOnTriggerCharacters: false,
      acceptSuggestionOnEnter: "off",
      tabCompletion: "off",
      wordBasedSuggestions: false,
      readOnly: isReadonly || !!busyUser,
      automaticLayout: true,
      fontSize: `${fontSize}px`,
      minimap: {
        enabled: false,
      },
      contextmenu: false,
    },
  };
}

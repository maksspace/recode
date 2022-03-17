import { useEffect, useRef, useState } from "react";
import debounce from "debounce";
import { useDispatch, useSelector } from "react-redux";
import { useMonaco } from "@monaco-editor/react";
import { RemoteCursorWidget } from "./RemoteCursor/RemoveCursorWidget";
import { RemoteCursor } from "./RemoteCursor/RemoteCursor";
import {
  setCodeShareCursorThunk,
  setCodeShareSelectionThunk,
} from "../../../store/thunks";
import {
  codeShareRemoteCursorsSelector,
  codeShareRemoteSelectionsSelector,
  facesRemoteParticipantsSelector,
} from "../../../store/selectors";

/*
endColumn: 6
endLineNumber: 1
positionColumn: 6
positionLineNumber: 1
selectionStartColumn: 6
selectionStartLineNumber: 1
startColumn: 6
startLineNumber: 1
 */

function disableAutocomplete(monaco: any) {
  // monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
  //   target: monaco.languages.typescript.ScriptTarget.ES2015,
  //   lib: ["es2015"],
  // });
  // monaco.languages.typescript.typescriptDefaults.addExtraLib(
  //   "",
  //   "lib.dom.d.ts"
  // );
}

function isZeroCharsSelection({ selection }: any) {
  const colDiff = Math.abs(selection.endColumn - selection.startColumn);
  const rowDiff = Math.abs(selection.startLineNumber - selection.endLineNumber);
  return !rowDiff && !colDiff;
}

export function useRemoteCursors({ editor }: UseRemoteCursorsProps) {
  const monaco = useMonaco();
  const dispatch = useDispatch();

  const activeSelectionRef = useRef<boolean>();
  const remoteParticipants = useSelector(facesRemoteParticipantsSelector);
  const remoteCursors = useSelector(codeShareRemoteCursorsSelector);
  const remoteSelections = useSelector(codeShareRemoteSelectionsSelector);
  const [cursorsWidgets, setCursorsWidgets] = useState<RemoteCursorWidget[]>(
    []
  );

  useEffect(() => {
    if (editor && monaco) {
      disableAutocomplete(monaco);
      const widgetsIds = cursorsWidgets.map((cw) => cw.cursor.id);
      const remoteCursorsIds = Object.keys(remoteCursors);
      const toCreate = remoteCursorsIds.filter(
        (cursorId) => !widgetsIds.includes(cursorId)
      );
      const toUpdate = cursorsWidgets.filter((cw) =>
        remoteCursorsIds.includes(cw.cursor.id)
      );
      const toDelete = cursorsWidgets.filter(
        (cw) => !remoteCursorsIds.includes(cw.cursor.id)
      );

      const createdWidgets = [];
      for (const cursorId of toCreate) {
        const participant = remoteParticipants.find((p) => p.id === cursorId);
        if (participant) {
          const cursor = new RemoteCursor(
            cursorId,
            participant.color,
            participant.login
          );
          const widget = new RemoteCursorWidget({
            cursor,
            editor,
          });

          widget.setPosition(remoteCursors[cursorId]);
          editor.addContentWidget(widget);
          editor.layoutContentWidget(widget);
          createdWidgets.push(widget);
        }
      }

      if (createdWidgets?.length) {
        setCursorsWidgets([...cursorsWidgets, ...createdWidgets]);
      }

      for (const widget of toUpdate) {
        const cursor = remoteCursors[widget.cursor.id];
        if (cursor) {
          widget.setPosition(cursor);
          const selection = remoteSelections?.[widget.cursor.id];
          if (selection) {
            widget.setSelection(selection);
          }
        }
      }

      const deleteWidgetsIds: string[] = [];
      for (const widget of toDelete) {
        editor.removeContentWidget(widget);
        deleteWidgetsIds.push(widget.cursor.id);
      }

      if (deleteWidgetsIds?.length) {
        setCursorsWidgets(
          cursorsWidgets.filter((w) => !deleteWidgetsIds.includes(w.getId()))
        );
      }
    }
  }, [monaco, editor, remoteCursors, remoteSelections]);

  useEffect(() => {
    if (editor) {
      activeSelectionRef.current = false;
      editor.onDidChangeCursorPosition(
        debounce(({ position, source }: any) => {
          const changedByUser = ["keyboard", "mouse"].includes(source);
          if (changedByUser) {
            dispatch(setCodeShareCursorThunk(position));
          }
        }, 50)
      );

      editor.onDidChangeCursorSelection(
        debounce((e: any) => {
          if (isZeroCharsSelection(e) && !activeSelectionRef.current) {
            return;
          }
          const range = new monaco.Range(
            e.selection.startLineNumber,
            e.selection.startColumn,
            e.selection.endLineNumber,
            e.selection.endColumn
          );
          activeSelectionRef.current = true;
          dispatch(setCodeShareSelectionThunk(range));
        }, 50)
      );
    }
  }, [editor]);

  useEffect(() => {
    const createParticipantSelectionStyle = (p: any) => {
      return `.selection_bg_${p.id} { background: ${p.color}; opacity: 0.4; transition: all; transition-duration: 1s; }`;
    };

    const styleId = "code_editor_selection_class";
    let styleEl = document.getElementById(styleId);
    if (styleEl) {
      styleEl.innerHTML = remoteParticipants
        .map(createParticipantSelectionStyle)
        .join("\n");
    } else {
      styleEl = document.createElement("style");
      styleEl.id = styleId;
      styleEl.innerHTML = remoteParticipants
        .map(createParticipantSelectionStyle)
        .join("\n");
      document.getElementsByTagName("head")[0].appendChild(styleEl);
    }

    return () => {
      if (styleEl) {
        styleEl.parentNode?.removeChild(styleEl);
      }
      for (const p of remoteParticipants) {
        const el = document.getElementById(p.id);
        if (el) {
          el.parentNode?.removeChild(el);
        }
      }
    };
  }, [remoteParticipants]);

  return [];
}

export type UseRemoteCursorsProps = {
  editor: any;
  participants: any[];
};

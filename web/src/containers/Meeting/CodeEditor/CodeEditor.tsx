import React from "react";
import Editor from "@monaco-editor/react";
import Paper from "@material-ui/core/Paper";
import "./CodeEditor.css";

import {useStyles} from "./styles";
import {EditorSettingsMenu} from "./EditorSettingsMenu";
import {useCodeShareEditor} from "./hooks";
import Icon from "@material-ui/core/Icon";
import {IsReadonlyVisible} from "../../IsReadonlyVisible";

export function CodeEditor() {
  const codeShare = useCodeShareEditor();
  const classes = useStyles({isDarkTheme: codeShare.isDarkTheme});
  return (
    <Paper className={classes.root} ref={codeShare.rootRef}>
      <Paper className={classes.editorTools} elevation={3}>
        <div className={classes.toolsLine}>
          <IsReadonlyVisible>
            <div className={classes.readOnlyWidget}>
              <Icon className={classes.readOnlyIcon}>visibility</Icon> readonly mode (locked)
            </div>
          </IsReadonlyVisible>
          {codeShare.busyUserName && (
            <div className={classes.userEditing}>
              <Icon>code</Icon> {codeShare.busyUserName} editing code ...
            </div>
          )}
        </div>
        <EditorSettingsMenu/>
      </Paper>
      <div className={classes.editorPadding}></div>
      <Editor
        className="code-editor"
        theme={codeShare.theme}
        language={codeShare.language}
        value={codeShare.code}
        options={codeShare.editorOptions}
        onChange={codeShare.onEditorChange}
        onMount={codeShare.onEditorMounted}
      />
    </Paper>
  );
}

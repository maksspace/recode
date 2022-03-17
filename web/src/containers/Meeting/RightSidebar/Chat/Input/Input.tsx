import React, {useEffect, useState} from 'react';
import Paper from "@material-ui/core/Paper";
import {useDispatch} from "react-redux";
import {useStyles} from "./styles";
import {sendChatMessageThunk} from "../../../../../store/thunks";
import {FilesUpload} from "../FilesUpload";
import {useInput} from "../../../../../hooks/useInput";

export function Input() {
  const dispatch = useDispatch();
  const textInput = useInput('');
  const [lines, setLines] = useState(1);
  const classes = useStyles({lines});

  const onEnterPress = (e: any) => {
    const text = e.target.value.trim();
    if (e.key === 'Enter' && !e.shiftKey && text) {
      dispatch(sendChatMessageThunk({text}));
      textInput.reset();
    }
  }

  useEffect(() => {
    const linesCount = textInput.value.split('\n').length;
    setLines(linesCount > 1 ? linesCount : 1);
  }, [textInput.value]);

  return (
    <Paper square className={classes.root} elevation={0}>
      <FilesUpload/>
      <textarea
        className={classes.input}
        placeholder='Write message here ...'
        {...textInput.bind}
        onKeyUp={onEnterPress}
      />
    </Paper>
  );
}

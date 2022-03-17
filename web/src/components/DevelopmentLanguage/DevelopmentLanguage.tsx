import React, {useEffect} from 'react';
import {MenuItem, TextField} from "@material-ui/core";
import {useInput} from "../../hooks/useInput";
import {useDevLanguages} from "../../hooks/useDevLanguages";
import {useStyles} from "./styles";

type DevelopmentStackSelectProps = {
  value: string;
  onChange: (value: string) => void;
};

export function DevelopmentLanguage({value, onChange}: DevelopmentStackSelectProps) {
  const stackInput = useInput('');
  const languages = useDevLanguages();
  const classes = useStyles();

  useEffect(() => {
    if (value) {
      stackInput.setValue(value);
    }
  }, []);

  useEffect(() => {
    onChange(stackInput.value);
  }, [stackInput.value])

  return (
    <TextField
        label="Language"
        className={classes.root}
        select variant='outlined'
        {...stackInput.bind}
        required
    >
      {languages.map(i => <MenuItem key={i} value={i}>{i}</MenuItem>)}
    </TextField>
  );
}

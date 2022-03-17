import React, {useState} from 'react';
import {useSelector} from "react-redux";
import Paper from "@material-ui/core/Paper";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Icon from '@material-ui/core/Icon';
import Badge from '@material-ui/core/Badge';
import {useStyles} from "./styles";
import { TextField, Typography } from '@material-ui/core';

export function MeetingSettings() {
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={1}>
      <Typography variant="h6">Faces</Typography>
      <TextField label="1231"/>

      <Typography variant="h6">Code Editor</Typography>
      <Paper variant="outlined">
          123
      </Paper>
    </Paper>
  );
}

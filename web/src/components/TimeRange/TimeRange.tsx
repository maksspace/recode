import React from 'react';
import {useStyles} from './styles';
import {TextField} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

export function TimeRange() {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Typography>Date and Time</Typography>
      <div className={classes.selects}>
        <TextField variant='outlined' label="Time From"/>
        <TextField variant='outlined' label="Time From"/>
        <TextField variant='outlined' label="Time To"/>
      </div>
    </section>
  );
}

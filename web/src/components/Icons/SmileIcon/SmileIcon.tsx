import React from 'react';
import {useStyles} from './styles';
import smileSVGPath from '../../../assets/icons/smile.svg';

export function SmileIcon() {
  const classes = useStyles();

  return (
    <span className={classes.root}>
      <img src={smileSVGPath}/>
    </span>
  );
}

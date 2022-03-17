import React from 'react';
import {useStyles} from './styles';
import outlookSVGPath from '../../../assets/icons/outlook.svg';

export function OutlookIcon() {
  const classes = useStyles();

  return (
    <span className={classes.root}>
      <img src={outlookSVGPath}/>
    </span>
  );
}

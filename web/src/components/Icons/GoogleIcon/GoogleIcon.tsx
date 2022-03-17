import React from 'react';
import {useStyles} from './styles';
import googleSVGPath from '../../../assets/icons/google.svg';

export function GoogleIcon() {
  const classes = useStyles();

  return (
    <span className={classes.root}>
      <img src={googleSVGPath}/>
    </span>
  );
}

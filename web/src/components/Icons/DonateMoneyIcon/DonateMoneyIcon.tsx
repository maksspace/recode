import React from 'react';
import {useStyles} from './styles';
import donateSVGPath from '../../../assets/icons/donate.svg';

export function DonateMoneyIcon() {
  const classes = useStyles();

  return (
    <span className={classes.root}>
      <img src={donateSVGPath}/>
    </span>
  );
}

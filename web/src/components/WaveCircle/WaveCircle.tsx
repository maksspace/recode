import React from 'react';
import cn from 'classnames';
import {useStyles} from './styles';
import './WaveCircle.css';

export type WaveCircleProps = {
  className?: string;
  color: string;
  children?: any
};

export function WaveCircle({children, color, className}: WaveCircleProps) {
  const classes = useStyles({color});
  return (
    <div className={cn([classes.wrap, className || ''])}>
      <div className={classes.circle}>
        {children}
      </div>
      <div className={classes.c1}/>
      <div className={classes.c2}/>
      <div className={classes.c3}/>
    </div>
  )
}

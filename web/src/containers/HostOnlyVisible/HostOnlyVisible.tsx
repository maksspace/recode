import React from 'react';
import {useSelector} from 'react-redux';
import {isHostSelector} from '../../store/selectors';

type HostOnlyVisibleProps = {
  children: any
};

export function HostOnlyVisible({children}: HostOnlyVisibleProps) {
  const isHost = useSelector(isHostSelector);
  return isHost ? children : null;
}

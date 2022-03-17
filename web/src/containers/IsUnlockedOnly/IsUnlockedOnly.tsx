import React from 'react';
import {useSelector} from 'react-redux';
import {isMeetingLockedSelector} from '../../store/selectors';

export function IsUnlockedOnly(props: any) {
  const isLocked = useSelector(isMeetingLockedSelector);
  return isLocked ? null : props.children;
}

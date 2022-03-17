import React from 'react';
import {useSelector} from 'react-redux';
import {isMeetingLockedSelector} from '../../store/selectors';

export function IsReadonlyVisible(props: any) {
  const isLocked = useSelector(isMeetingLockedSelector);
  return isLocked ? props.children : null;
}

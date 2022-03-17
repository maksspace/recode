import React from 'react';
import {UserAvatar} from "../UserAvatar";
import {getAvatarConfigByCode} from "./getAvatarConfigByCode";
import {Participant} from "../../models";

type ParticipantAvatarProps = {
  small: boolean;
  currentUser?: boolean;
  onClick?: (e: any) => void;
  onContextMenuClick?: (e: any) => void;
  participant: Participant;
}

export function ParticipantAvatar(props: ParticipantAvatarProps) {
  const avatarConfig = getAvatarConfigByCode(props.participant.avatar);
  return (
    <UserAvatar
      activityIcon={!props.participant.audio ? 'volume_off' : 'volume_up'}
      size={props.small ? 50 : 100}
      login={props.participant.login}
      currentUser={props.currentUser}
      color={props.participant.color}
      avatarConfig={avatarConfig}
      onClick={props.onClick}
      onContextMenuClick={props.onContextMenuClick}
    />
  );
}

import React from 'react';
import AvatarComponent from "avataaars";
import {useStyles} from "./styles";

export type UserAvatarProps = {
  color: string;
  activityIcon?: string;
  currentUser?: boolean;
  pulse?: boolean;
  size: number;
  login?: string;
  avatarConfig?: {
    topType: string;
    accessoriesType: string;
    hairColor: string;
    facialHairType: string;
    clotheType: string;
    clotheColor: string;
    eyeType: string;
    eyebrowType: string;
    mouthType: string;
    skinColor: string;
  };
  onClick?: (e: any) => void;
  onContextMenuClick?: (e: any) => void;
};

export function UserAvatar(props: UserAvatarProps) {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <div className={classes.avatar} onClick={props.onClick} onContextMenu={props.onContextMenuClick}>
        <AvatarComponent
          style={{
            width: props.size,
            height: props.size,
            background: props.color,
            borderRadius: '50%',
            border: '2px solid rgba(255, 255, 255, 0.8)',
            cursor: 'pointer'
          }}
          avatarStyle='Transparent'
          {...props.avatarConfig || {}}
        />{}
        {/* Removed for now, bc webrtc part not implemented */}
        {/*{props.activityIcon && (*/}
        {/*  <div className={cn(classes.activity, {[classes.pulse]: props.pulse})}>*/}
        {/*    <Icon>{props.activityIcon}</Icon>*/}
        {/*  </div>*/}
        {/*)}*/}
      </div>
      {props.login && (
        <span className={classes.name}>{props.login} {props.currentUser ? '(you)' : ''}</span>
      )}
    </div>
  )
}

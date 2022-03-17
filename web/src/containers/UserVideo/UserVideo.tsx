import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon"
import {useStyles} from "./styles"
import {useUserVideo} from './hooks';
import {CurrentUserAvatar} from "../CurrentUserAvatar";

type UserVideoProps = {
  onMediaObtained?: (stream: MediaStream) => void;
  onMuteAudio?: (muted: boolean) => void;
  onMuteVideo?: (muted: boolean) => void;
};

export function UserVideo(props: UserVideoProps) {
  const {
    user,
    menu,
    initialised,
    videoRef,
    noMedia,
    ...handlers
  } = useUserVideo(props);

  const classes = useStyles(user);

  // add mute/unmute on space press

  return (
    <div className={classes.root}>

      {!user.video && (
        <div className={classes.userAvatar}>
          <CurrentUserAvatar small={false}/>
        </div>
      )}

      <video
        className={classes.video}
        ref={videoRef as any}
        muted
        autoPlay
        playsInline
      />

      <div className={classes.muteButtons}>
        <IconButton disabled={noMedia} className={classes.audioMuteButton} onClick={handlers.muteAudio}>
          <Icon>{user.audio ? 'mic' : 'mic_off'}</Icon>
        </IconButton>
        <IconButton disabled={noMedia} className={classes.videoMuteButton} onClick={handlers.muteVideo}>
          <Icon>{user.video ? 'videocam' : 'videocam_off'}</Icon>
        </IconButton>
      </div>

      {/*<SettingsButton/>*/}
    </div>
  )
}

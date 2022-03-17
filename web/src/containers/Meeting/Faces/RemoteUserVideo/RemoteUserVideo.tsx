import React, {useEffect, useRef} from 'react';
import {useStyles} from "./styles";
import Peer from "simple-peer";
import {ParticipantAvatar} from "../../../../components/ParticipantAvatar";
import {Participant} from "../../../../models";

type RemoteUserVideoProps = {
  peer?: Peer.Instance;
  user: Participant;
};

export function RemoteUserVideo({peer, user}: RemoteUserVideoProps) {
  const videoRef = useRef<any>();

  useEffect(() => {
    if (peer) {
      peer.on("stream", (stream: MediaStream) => {
        if (videoRef?.current) {
          videoRef.current.srcObject = stream;
        }
      });
    }
  }, [peer]);

  const classes = useStyles(user);
  return (
    <div className={classes.root}>
      {!user.video && (
        <div className={classes.userAvatarContainer}>
          <ParticipantAvatar small={false} participant={user}/>
        </div>
      )}
      <video className={classes.video} playsInline autoPlay ref={videoRef}/>
    </div>
  )
}

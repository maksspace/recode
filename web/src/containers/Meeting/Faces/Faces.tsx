import React from 'react';
import {Paper} from "@material-ui/core";
import {UserVideo} from "../../UserVideo";
import {useStyles} from "./styles";
import {RemoteUserVideo} from "./RemoteUserVideo";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import {useSelector} from "react-redux";
import {facesParticipantsCountSelector, facesRemoteParticipantsSelector} from "../../../store/selectors";

export default function Faces({onMinimizeClick}: any) {
  const participants = useSelector(facesRemoteParticipantsSelector);
  const participantsCount = useSelector(facesParticipantsCountSelector);
  const classes = useStyles({participantsCount});

  return (
    <Paper className={classes.root}>
      <div className={classes.overlay}>
        Video/Audio calls coming soon!
      </div>
      <IconButton className={classes.resizeIcon} onClick={onMinimizeClick}>
        <Icon>fullscreen_exit</Icon>
      </IconButton>
      <section className={classes.users}>
        <UserVideo/>
        {participants.map((p) => {
          return (
            <RemoteUserVideo
              key={p.id}
              user={p}
              peer={null as any}
            />
          );
        })}
      </section>
    </Paper>
  );
}

import React from 'react';
import {useSelector} from "react-redux";
import {facesRemoteParticipantsSelector} from "../../../store/selectors";
import {useStyles} from "./styles";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import {CurrentUserAvatar} from "../../CurrentUserAvatar";
import {ParticipantAvatar} from "../../../components/ParticipantAvatar";

export function FacesSidebar({onFullSizeClick}: any) {
  const participants = useSelector(facesRemoteParticipantsSelector);
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <div className={classes.container}>
        <div className={classes.previewItems}>
          <div className={classes.previewItem}>
            <CurrentUserAvatar small={true}/>
          </div>
          {(participants).map((p) => {
            return (
              <div className={classes.previewItem} key={p.id}>
                <ParticipantAvatar
                  small={true}
                  participant={p}
                />
              </div>
            );
          })}
        </div>
        {/* Disabled, bc webrtc not supported yet */}
        {/*<div className={classes.settings}>*/}
        {/*  <IconButton size='small' onClick={onFullSizeClick}>*/}
        {/*    <Icon>fullscreen</Icon>*/}
        {/*  </IconButton>*/}
        {/*</div>*/}
      </div>
    </section>
  );
}

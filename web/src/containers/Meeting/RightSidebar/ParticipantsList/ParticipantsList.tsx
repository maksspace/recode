import React from "react";
import {useSelector} from "react-redux";
import Paper from "@material-ui/core/Paper";
import {ListItemIcon} from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListSubheader from "@material-ui/core/ListSubheader";

import {useStyles} from "./styles";
import {currentUserSelector, facesRemoteParticipantsSelector, hostIdSelector,} from "../../../../store/selectors";
import {ParticipantAvatar} from "../../../../components/ParticipantAvatar";

const getParticipantLabel = (
  hostId: string,
  userId: string,
  userName: string
) => {
  if (hostId === userId) {
    return `${userName} (host)`;
  }
  return userName;
};

export function ParticipantsList() {
  const participants = useSelector(facesRemoteParticipantsSelector);
  const user = useSelector(currentUserSelector);
  const hostId = useSelector(hostIdSelector);
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <List subheader={
        <ListSubheader component="div">
          Participants
        </ListSubheader>
      }>
        <ListItem>
          <ListItemAvatar>
            <ParticipantAvatar small={true} participant={{...user, login: ''}}/>
          </ListItemAvatar>
          <ListItemText style={{paddingLeft: 16}} primary={`${user.login} (you)`}/>
          <ListItemIcon>
            <Icon>{user.audio ? "mic" : "mic_off"}</Icon>
            <Icon>{user.audio ? "videocam" : "videocam_off"}</Icon>
          </ListItemIcon>
        </ListItem>
        {participants.map((p) => (
          <ListItem key={p.id}>
            <ListItemAvatar>
              <ParticipantAvatar small={true} participant={{...p, login: ''}}/>
            </ListItemAvatar>
            <ListItemText
              primary={getParticipantLabel(hostId as string, p.id, p.login)}
            />
            <ListItemIcon>
              <Icon>{p.audio ? "mic" : "mic_off"}</Icon>
              <Icon>{p.audio ? "videocam" : "videocam_off"}</Icon>
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

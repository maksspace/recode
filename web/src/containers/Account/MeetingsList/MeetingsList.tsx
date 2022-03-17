import React from 'react';
import List from "@material-ui/core/List";
import moment from "moment";
import {ListItem, ListItemSecondaryAction, ListItemText} from "@material-ui/core";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";
import {useStyles} from './styles';
import {useMeetingsList} from "./hooks";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import {CreateMeetingForm} from "../../CreateMeetingForm";

export function MeetingsList() {
  const {meetingsList, dialog, onDialogOpen, onDialogClose} = useMeetingsList();
  const classes = useStyles();

  return (
    <React.Fragment>
      <List>
        <ListSubheader className={classes.header}>
          <Typography className={classes.headerTitle}>
            Created meetings
          </Typography>
          <IconButton onClick={onDialogOpen}>
            <Icon>add</Icon>
          </IconButton>
        </ListSubheader>
        {meetingsList.map((meeting: any) => (
          <ListItem button key={meeting.id}>
            <ListItemText>{meeting.title || 'Meeting title'}</ListItemText>
            <ListItemSecondaryAction>
              <ListItemText>
                {moment(meeting.createAt).format('HH:mm DD.MM.YY')}
              </ListItemText>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
      <Dialog open={dialog} onClose={onDialogClose}>
        <DialogContent>
          <CreateMeetingForm/>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}

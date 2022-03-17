import React from 'react';
import {useStyles} from './styles';
import List from "@material-ui/core/List";
import {ListItem, ListItemText} from "@material-ui/core";
import ListSubheader from "@material-ui/core/ListSubheader";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import {CreateMeetingForm} from "../../CreateMeetingForm";
import {useInterviewTemplates} from "./hooks";

export function InterviewTemplates() {
  const {templatesList, dialog, onDialogClose, onDialogOpen} = useInterviewTemplates();
  const classes = useStyles();

  return (
    <React.Fragment>
      <List>
        <ListSubheader className={classes.header}>
          <Typography className={classes.headerTitle}>
            Interview templates
          </Typography>
          <IconButton onClick={onDialogOpen}>
            <Icon>add</Icon>
          </IconButton>
        </ListSubheader>
        {templatesList.map((meeting: any) => (
          <ListItem key={meeting.id}>
            <ListItemText></ListItemText>
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

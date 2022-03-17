import React, {useState} from "react";
import Icon from "@material-ui/core/Icon";
import Dialog from '@material-ui/core/Dialog';
import Grid from "@material-ui/core/Grid";
import DialogContent from "@material-ui/core/DialogContent";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";
import {useStyles} from "./styles";

type SettingsDialogProps = {
  dialog: boolean;
  onClose(): void;
};

export function SettingsDialog({ dialog, onClose }: SettingsDialogProps) {
  const classes = useStyles();
  return (
      <Dialog open={dialog} onClose={onClose}>
        <DialogContent>
          <Grid container>
            <Grid item>
              <Typography variant='h5'>
                Settings
              </Typography>
              <List component="nav" className={classes.menuWidth}>
                <ListItem button>
                  <ListItemIcon>
                    <Icon>videocam</Icon>
                  </ListItemIcon>
                  <ListItemText primary="Video"/>
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <Icon>headphones</Icon>
                  </ListItemIcon>
                  <ListItemText primary="Audio"/>
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <Icon>settings</Icon>
                  </ListItemIcon>
                  <ListItemText primary="General"/>
                </ListItem>
              </List>
            </Grid>
            <Grid item>
              <div className={classes.contentWidth}>

              </div>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
  );
}

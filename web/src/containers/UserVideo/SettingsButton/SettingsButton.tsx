import React, { useState } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import {useStyles} from "./styles";
import { ListItemIcon } from '@material-ui/core';
import { SettingsDialog } from '../SettingsDialog';

export function SettingsButton() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [settingsDialog, setSettingsDialog] = useState(false);
  const classes = useStyles();

  const handleClick = (e: any) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onOpenSettings = () => {
    setSettingsDialog(true);
  };

  return (
    <>
      <SettingsDialog dialog={settingsDialog} onClose={() => setSettingsDialog(false)}/>
      <IconButton className={classes.settingsButton} onClick={handleClick}>
        <Icon>more_vert</Icon>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={onOpenSettings}>
          <ListItemIcon>
            <Icon>settings</Icon>
          </ListItemIcon>
          Settings
        </MenuItem>
      </Menu>
    </>
  );
}

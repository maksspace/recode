import React, {useState} from 'react';
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {useStyles} from "./styles";

export function PlanMoreMenu({onSelect}: any) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e: any) => {
    setAnchorEl(e.currentTarget);

  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onOptionSelect = (name: string) => {
    handleClose();
    onSelect(name);
  };

  const classes = useStyles();
  return (
    <div>
      <IconButton size="small" onClick={handleClick}>
        <Icon>more_vert</Icon>
      </IconButton>
      <Menu
        className={classes.menu}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => onOptionSelect('drop-code')}>
          <Icon className={classes.icon}>code</Icon> Drop to editor
        </MenuItem>
        <MenuItem onClick={() => onOptionSelect('edit-item')}>
          <Icon className={classes.icon}>edit</Icon> Edit item
        </MenuItem>
      </Menu>
    </div>
  );
}

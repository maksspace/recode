import React, {useEffect, useState} from 'react';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Icon from "@material-ui/core/Icon";

export type PopupMenuProps = {
  options: Array<{
    id: string;
    icon?: string;
    text: string;
  }>
  open: boolean;
  onSelectOption: (id: string) => void;
  onClose: () => void;
};

export function PopupMenu(props: PopupMenuProps) {
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    if (props.open) {
      setAnchorEl(anchorEl);
    } else {
      handleClose();
    }
  }, [props.open])

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onOptionSelect = (id: string) => {
    props.onSelectOption(id);
    handleClose();
  };

  return (
    <Menu
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      {props.options.map(i => (
        <MenuItem key={i.id} onClick={() => onOptionSelect(i.id)}>
          {i.icon && (<Icon>account_box</Icon>)} {i.text}
        </MenuItem>
      ))}
    </Menu>
  )
}

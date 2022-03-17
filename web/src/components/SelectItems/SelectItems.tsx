import React from 'react';
import {MenuItem, TextField} from "@material-ui/core";

type SelectItemsProps = {
  label?: string;
  items: Array<{ text: string; value: string; } | string>;
  value: string;
  onChange?: (e: any) => void;
};

export function SelectItems(props: SelectItemsProps) {
  return (
    <TextField
      size={'small'}
      select
      variant='outlined'
      label={props.label}
      onChange={props.onChange}
    >
      {props.items.map(i => (
        <MenuItem
          value={typeof i === 'string' ? i : i.value}
          key={typeof i === 'string' ? i : i.value}>
          {typeof i === 'string' ? i : i.text}
        </MenuItem>
      ))}
    </TextField>
  );
}

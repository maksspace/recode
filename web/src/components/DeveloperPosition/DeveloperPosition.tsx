import React, {useEffect} from 'react';
import {useStyles} from './styles';
import {MenuItem, TextField} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {useInput} from "../../hooks/useInput";

type DeveloperPositionProps = {
  value: string;
  onChange: (value: string) => void;
};

const ROLES = ['UI', 'Backend', 'DevOps', 'QA'];
const LEVELS = ['Junior', 'Middle', 'Senior'];

export function DeveloperPosition({value, onChange}: DeveloperPositionProps) {
  const roleInput = useInput('');
  const levelInput = useInput('');
  const classes = useStyles();

  useEffect(() => {
    if (value) {
      const [levelValue, roleValue] = value.split(' ');
      roleInput.setValue(roleValue);
      levelInput.setValue(levelValue);
    }
  }, []);

  useEffect(() => {
    onChange(`${levelInput.value} ${roleInput.value} `);
  }, [roleInput.value, levelInput.value]);

  return (
    <div className={classes.root}>
      <Typography variant='subtitle1' className={classes.title}>
        Position
      </Typography>
      <div className={classes.selects}>
        <TextField label="Role" select variant='outlined' {...roleInput.bind}>
          {ROLES.map(role => <MenuItem key={role} value={role}>{role}</MenuItem>)}
        </TextField>
        <TextField label="Level" select variant='outlined' {...levelInput.bind}>
          {LEVELS.map(level => <MenuItem key={level} value={level}>{level}</MenuItem>)}
        </TextField>
      </div>
    </div>
  );
}

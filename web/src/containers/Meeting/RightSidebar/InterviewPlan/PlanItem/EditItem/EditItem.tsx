import React from "react";
import Dialog, {DialogProps} from '@material-ui/core/Dialog';
import DialogContent from "@material-ui/core/DialogContent";
import {useStyles} from "./styles";
import {DialogActions, DialogTitle, MenuItem, TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {useInput} from "../../../../../../hooks/useInput";
import {addInterviewPlanThunk} from "../../../../../../store/thunks";
import {useDispatch} from "react-redux";

const DURATIONS = [
  '1min',
  '3min',
  '5min',
  '10min',
  '15min',
  '20min',
  '25min',
  "30min",
  "45min"
];

type AddPlanStepDialogProps = {
  dialog: boolean;
  onClose(): void;
};

export function EditItem({dialog, onClose}: AddPlanStepDialogProps) {
  const dispatch = useDispatch()
  const titleInput = useInput('');
  const durationInput = useInput('5min');
  const descInput = useInput('');
  const [dialogMaxWidth] = React.useState<DialogProps['maxWidth']>('sm');
  const classes = useStyles();

  const onAddStep = () => {
    if (!titleInput.isEmpty()) {
      dispatch(
        addInterviewPlanThunk({
          title: titleInput.value,
          duration: durationInput.value,
          description: descInput.value
        })
      );
      titleInput.reset();
      descInput.reset();
      durationInput.reset('5min');
      onClose();
    }
  };

  return (
    <Dialog open={dialog} onClose={onClose} fullWidth maxWidth={dialogMaxWidth}>
      <DialogTitle>
        Add Plan Step
      </DialogTitle>
      <DialogContent className={classes.content}>
        <TextField required variant="outlined" label="Title" {...titleInput.bind}/>
        <TextField variant="outlined" select label="Duration" {...durationInput.bind}>
          {DURATIONS.map((item, index) => (
            <MenuItem value={item} key={index}>{item}</MenuItem>
          ))}
        </TextField>
        <TextField
          variant="outlined"
          label="Description"
          multiline
          helperText="Code, description, additional info ..."
          rows={10}
          {...descInput.bind}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>
          Cancel
        </Button>
        <Button onClick={onAddStep} color="primary" variant="contained">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
}

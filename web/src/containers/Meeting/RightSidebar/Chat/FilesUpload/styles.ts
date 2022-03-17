import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  fileInput: {
    display: 'none'
  },
  fileItemIcon: {
    background: theme.palette.primary.main,
    color: 'rgba(0, 0, 0, 0.6)'
  },
  fileLoading: {
    position: 'absolute',
    color: 'white'
  },
  attachmentIcon: {
    transform: 'rotate(45deg)'
  }
}));

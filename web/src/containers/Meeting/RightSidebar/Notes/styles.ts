import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    height: 'calc(100% - 48px)',
    top: 48,
    borderRadius: 0,
    background: theme.palette.background.paper
  },
  input: {
    height: '50%',
    overflowY: 'auto',
    border: 'none',
    outline: 'none',
    background: 'transparent',
    color: 'white',
    borderBottom: '1px solid rgba(0, 0, 0, .4)',
    padding: '8px',
    boxSizing: 'border-box',
    fontSize: 12
  },
  preview: {
    color: 'black',
    padding: '8px',
    boxSizing: 'border-box',
    height: '50%',
    overflowY: 'auto'
  }
}));

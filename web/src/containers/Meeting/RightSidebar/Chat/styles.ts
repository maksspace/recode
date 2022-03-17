import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: {
    height: 'calc(100vh - 54px)',
    position: 'relative',
    borderRadius: 0
  },
  messagesList: {
    height: 'calc(100% - 48px)',
    color: 'black',
    padding: 8,
    paddingTop: 56,
    overflowY: 'auto'
  },
}));

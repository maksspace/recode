import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  mainContent: {
    display: 'flex',
    width: '100%',
    position: 'relative',
    flexGrow: 1,
    height: 'calc(100vh - 54px)',
    overflow: 'hidden',
  },
  container: {
    width: 'calc(100% - 80px)',
    maxWidth: '100% !important',
    height: '100%',
    padding: '0 !important'
  },
  paper: {
    padding: theme.spacing(0),
    display: 'flex',
    overflow: 'hidden',
    flexDirection: 'column',
    borderRadius: 0,
  },

  mainReadyContent: {
    width: 'calc(100% - 80px)',
    height: '100%'
  },

  facesSidebar: {
    width: '80px',
    height: '100%'
  }
}));

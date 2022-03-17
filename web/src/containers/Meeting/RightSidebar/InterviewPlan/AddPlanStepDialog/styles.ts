import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 'calc(100vw - 200px)',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      marginBottom: 12
    }
  }
}));

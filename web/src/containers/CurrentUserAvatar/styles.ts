import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: 480,
    display: 'flex',
    flexDirection: 'row'
  },
  config: {
    display: 'flex',
    flexDirection: 'column',
    flex: '0 0 180px',
    '& > *': {
      marginBottom: 12
    }
  },
  preview: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  }
}));

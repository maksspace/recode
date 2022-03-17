import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
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
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  info: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
    padding: '16px 28px'
  }
}));

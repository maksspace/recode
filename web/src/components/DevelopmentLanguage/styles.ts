import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 12,
    marginTop: 8
  },
  title: {
    marginBottom: 4
  },
  selects: {
    display: 'flex',
    '& > *': {
      flex: 1,
      marginRight: 8,
      '&:last-child': {
        marginRight: 0
      }
    }
  }
}));

import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: 24,
    '& > img': {
      width: '100%'
    }
  }
}));

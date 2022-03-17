import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      width: '100px'
    }
  },
  menu: {
    minWidth: 240
  },
  icon: {
    marginRight: 4
  }
}));

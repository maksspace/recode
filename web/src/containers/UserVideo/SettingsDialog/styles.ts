import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  menuWidth: {
    width: '240px'
  },
  contentWidth: {
    width: '480px',
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

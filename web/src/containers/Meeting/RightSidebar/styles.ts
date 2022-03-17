import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    height: '100%',
    borderRadius: 0,
    background: theme.palette.background.paper
  },
  tabsHeader: {
    boxShadow: theme.shadows[2],
    position: 'absolute',
    top: 0,
    zIndex: 2,
    width: '100%',
    background: theme.palette.background.paper
  },
  tabItem: {
    minWidth: 0
  },
  badge: {
    right: -3,
    padding: '0 4px',
  }
}));

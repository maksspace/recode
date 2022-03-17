import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    height: 'calc(100% - 48px)',
    top: 48,
    borderRadius: 0,
    background: theme.palette.background.paper
  },
  header: {
    display: 'flex',
    background: 'rgba(0, 0, 0, 0.2)',
    zIndex: 1,
    boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);'
  },
  list: {
    position: 'relative',
    height: '100%',
    overflow: 'auto'
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

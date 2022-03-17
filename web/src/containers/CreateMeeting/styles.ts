import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    background: theme.palette.background.default
  },
  root: {
    display: 'flex',
    height: 'calc(100vh - 64px)',
    alignItems: 'center'
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
}));

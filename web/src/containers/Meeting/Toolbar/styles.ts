import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    position: 'relative',
    background: theme.palette.background.default
  },
  toolbar: {
    height: 54,
    maxHeight: 54,
    minHeight: 54,
  },
  title: {
    flexGrow: 1,
  },
  copyClipboardIcon: {
    marginLeft: 8
  },
  reportButton: {
    marginRight: 8
  }
}));

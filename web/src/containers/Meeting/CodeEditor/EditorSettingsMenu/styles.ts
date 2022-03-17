import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 12
  },
  langAndFontSize: {
    color: 'rgba(255, 255, 255, 0.6)',
    marginRight: 4
  },
  settingsIcon: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.6)'
  },
  menu: {
    minWidth: 240
  }
}));

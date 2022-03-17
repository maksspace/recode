import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    background: theme.palette.background.default
  },
  joinForm: {
    display: 'flex',
    height: 'calc(100vh - 100px)'
  },
  videoSettingsPaper: {
    overflow: 'hidden'
  },
  readyToJoinText: {
    marginBottom: theme.spacing(3)
  },
  space: {
    padding: '16px 0',
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.7)'
  }
}));

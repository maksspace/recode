import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: 4,
    marginBottom: 8
  },

  avatarBlock: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },

  avatarIcon: {
    marginRight: 8,
    fontSize: 20
  },

  contentBlock: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  },

  contentSenderName: {
    color: theme.palette.primary.main,
    fontWeight: 'bold'
  },

  contentText: {
    color: 'white',
    wordBreak: 'break-word'
  },

  dateBlock: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, .55)'
  },

  contentFile: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    cursor: "pointer",
    margin: '4px 0',
    color: 'rgba(255, 255, 255, .7)'
  },

  contentFileIcon: {
    marginRight: 6
  },

  contentFileName: {
    fontWeight: 'bolder',
    flex: 1
  },

  contentFileSize: {
    fontWeight: 'bolder',
  }
}));

import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    background: theme.palette.background.paper,
    overflow: 'hidden',
    flex: 1
  },
  video: {
    height: '100%',
    transform: 'rotateY(180deg)'
  },
  userAvatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  audioMuteButton: {
    cursor: 'default',
    position: 'absolute',
    bottom: 12,
    left: 12,
  },
  connectionProgress: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  userAvatarContainer: {
    zIndex: 10,
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    right: 0,
    width: '100%',
    height: '100%'
  }
}));

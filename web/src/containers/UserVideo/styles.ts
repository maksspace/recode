import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    background: theme.palette.background.paper,
    justifyContent: 'center',
    overflow: 'hidden',
    flex: '1',
    zIndex: 10
  },
  video: ({video, audio}: any) => ({
    width: '100%',
    visibility: video ? 'visible' : 'hidden',
    transform: 'rotateY(180deg)',
    filter: audio ? '' : 'grayscale(1)',
    zIndex: video ? 0 : -1
  }),
  muteButtons: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    padding: '12px 0',
    zIndex: 50
  },
  audioMuteButton: ({audio}: any) => ({
    border: '1px solid white',
    color: audio ? 'white' : 'rgba(0, 0, 0, .8)',
    marginRight: '16px',
    background: audio ? 'rgba(255, 255, 255, 0.2)' : 'white',
    '&:hover': {
      background: audio ? 'rgba(255, 255, 255, 0.2)' : 'white',
    }
  }),
  videoMuteButton: ({video}: any) => ({
    border: '1px solid white',
    color: video ? 'white' : 'red',
    background: video ? 'rgba(255, 255, 255, 0.2)' : 'white',
    '&:hover': {
      background: video ? 'rgba(255, 255, 255, 0.2)' : 'white',
    }
  }),
  progress: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    zIndex: 1,
    '& svg': {
      color: 'white !important'
    }
  },
  userAvatar: {
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

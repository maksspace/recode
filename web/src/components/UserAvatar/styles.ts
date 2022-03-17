import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    position: 'relative'
  },
  avatar: ({size}: any) => ({
    width: size,
    height: size,
    position: 'relative'
  }),
  name: ({size}: any) => ({
    maxWidth: 60,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    fontSize: size <= 60 ? 11 : 14,
    marginTop: 4,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.8)'
  }),
  activity: ({size}: any) => ({
    width: size <= 60 ? 18 : 26,
    height: size <= 60 ? 18 : 26,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    fontSize: 14,
    background: 'white',
    color: 'rgba(0, 0, 0, 0.7)',
    borderRadius: '50%',
    bottom: 0,
    right: 0,
    '& > *': {
      fontSize: size <= 60 ? 14 : 18,
    }
  }),
  pulse: {
    animation: '$pulse 2s linear 0s infinite',
  },
  "@keyframes pulse": {
    "0%": {
      opacity: 0.2,
    },
    "50%": {
      opacity: 1,
    },
    "100%": {
      opacity: 0.2
    }
  },
}));

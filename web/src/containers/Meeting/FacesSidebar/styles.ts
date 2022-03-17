import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '80px',
    height: '100%',
    flexDirection: 'column',
    background: theme.palette.background.paper,
    position: 'relative',
    padding: '16px 0 0 0',
    boxSizing: "border-box",
    borderRight: '1px solid rgba(0, 0, 0, 0.2)'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8px 0',
    '& .MuiIcon-root': {
      fontSize: 32
    },
    borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
    marginBottom: 12
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1
  },
  previewItems: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1
  },
  previewItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 16
  },
  previewTitle: {
    maxWidth: 60,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    fontSize: 10,
    marginTop: 4,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.8)'
  },
  settings: {
    width: '100%',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderTop: '1px solid rgba(0, 0, 0, 0.2)',
    padding: '8px 0'
  },
  waveCircle: {
    position: 'absolute',
    top: 10
  }
}));

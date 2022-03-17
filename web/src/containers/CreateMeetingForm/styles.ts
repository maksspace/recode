import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  field: {
    marginBottom: 18
  },
  title: {
    textAlign: 'center',
    marginBottom: 18,
    fontSize: 28
  },
  createBtn: {
    marginTop: 0
  },
  actions: {
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      marginBottom: 6
    }
  },
  linkPreview: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'monospace',
    fontSize: 12,
    wordBreak: 'break-word',
    border: '1px dashed rgba(255, 255, 255, 0.55)',
    borderRadius: 4,
    margin: '28px 0',
    padding: 4
  },
  lintPreviewCopyIcon: {
    marginLeft: 4
  }
}));

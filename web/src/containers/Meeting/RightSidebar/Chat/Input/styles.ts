import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: {
    height: 48,
    padding: '0 8px',
    background: '#424854',
    display: 'flex',
    alignItems: 'center'
  },
  input: ({lines}: any) => (
    {
      resize: 'none',
      fontFamily: 'Roboto, sans-serif',
      fontSize: 13,
      height: lines > 1 ? 36 : 18,
      flex: 1,
      marginLeft: 8,
      background: 'transparent',
      outline: 'none',
      border: 'none',
      color: 'white',
      '&::placeholder': {
        color: 'white'
      },
      '&::-webkit-scrollbar': {
        width: '0px'
      }
    }
  )
}));

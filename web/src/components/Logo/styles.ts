import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  logo: ({big}: any) => ({
    position: 'relative',
    paddingLeft: 8,

    display: 'inline-flex',

    cursor: 'pointer',

    fontFamily: "'Nunito', sans-serif",
    fontWeight: 700,
    fontSize: big ? 36 : 24,
    color: '#ffffff',
    '&:before': {
      content: '" "',
      width: big ? 8 : 6,
      height: big ? 8 : 6,
      position: 'absolute',
      bottom: 4,
      left: 0,
      borderRadius: 50,
      background: '#ef233c'
    }
  })
}));

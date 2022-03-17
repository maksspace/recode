import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(() => {
  return {
    root: {
      height: 'calc(100vh - 54px)'
    },
    editorTools: {
      height: 30,
      borderRadius: 0,
      zIndex: 100,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '0 4px'
    },
    editorPadding: ({isDarkTheme}: any) => ({
      width: '100%',
      height: 8,
      background: isDarkTheme ? '#1e1e1e' : '#ffffff'
    }),

    toolsLine: {
      display: 'flex',
      flex: 1,
    },

    readOnlyWidget: {
      display: 'flex',
      alignItems: 'center',
      color: 'rgba(255, 255, 255, 0.55)',
      fontSize: 12,
      marginLeft: 8
    },

    readOnlyIcon: {
      fontSize: 14,
      marginRight: 4
    },

    userEditing: {
      display: 'flex',
      alignItems: 'center',
      color: 'rgba(255, 255, 255, 0.55)',
      fontSize: 12,
      marginLeft: 8,
      '& > *': {
        fontSize: 14,
        marginRight: 4
      },
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
  }
});

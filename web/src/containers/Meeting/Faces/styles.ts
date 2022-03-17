import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'row',
      width: '100vw',
      height: 'calc(100vh - 54px)',
      position: 'absolute',
      zIndex: 10,
      borderRadius: 0,
      background: theme.palette.background.paper
    },
    overlay: {
      background: 'rgba(0, 0, 0, 0.66)',
      color: 'rgba(255, 255, 255, 0.7)',
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: 0,
      width: '100vw',
      height: '100vh',
      fontSize: '24px'
    },
    users: ({participantsCount}: any) => {
      if (participantsCount < 4) {
        return {
          width: '100%',
          height: 'calc(100vh - 54px)',
          display: 'flex',
          flexDirection: 'row',
          '& > div': {
            border: `1px solid ${theme.palette.background.default}`
          }
        }
      }

      const columns = Math.ceil(Math.sqrt(participantsCount));
      const columnsFill = new Array(columns).fill('1fr').join(' ');
      const rowsFill = new Array(columns).fill('1fr').join(' ')
      return {
        width: '100%',
        height: 'calc(100vh - 54px)',
        display: 'grid',
        gridTemplateColumns: columnsFill,
        gridTemplateRows: rowsFill,
        gap: '0px 0px',
        gridTemplateAreas: `
          ${new Array(columns).fill(`"${new Array(columns).fill('.').join(' ')}"`).join("\n")}
        `,
        '& > div': {
          border: `1px solid ${theme.palette.background.default}`
        }
      }
    },
    resizeIcon: {
      position: 'absolute',
      border: '1px solid white',
      right: 12,
      zIndex: 200,
      top: 12
    },
  }))
;

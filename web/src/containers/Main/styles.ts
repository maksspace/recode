import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    background: theme.palette.background.default
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  main: {
    paddingTop: 48,
  },
  features: {
    paddingTop: 38,
    paddingBottom: 38
  },
  featureHeader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    "& .MuiIcon-root": {
      marginRight: 8
    }
  },
  carousel: {
    border: '1px solid rgba(255, 255, 255, 0.2)',
    '& > img': {
      width: '100%'
    }
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
  donationTitle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

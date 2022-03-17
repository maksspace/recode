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
  content: {
    padding: 8,
    height: 500
  },
}));

// import {makeStyles} from "@material-ui/core/styles";
//
// export const useStyles = makeStyles((theme) => ({
//   appBar: {
//     borderBottom: `1px solid ${theme.palette.divider}`,
//     background: theme.palette.background.default
//   },
//   toolbar: {
//     flexWrap: 'wrap',
//   },
//   toolbarTitle: {
//     flexGrow: 1,
//   },
//   mainContainer: {
//     paddingTop: 48,
//   },
//   content: {
//     padding: 8,
//     height: 500
//   },
// }));

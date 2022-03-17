import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    height: "calc(100% - 48px)",
    top: 48,
    borderRadius: 0,
    background: theme.palette.background.paper,
    padding: 8,
    boxSizing: 'border-box'
  },
}));

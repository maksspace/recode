import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {Logo} from "../../components/Logo";
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router";
import {useStyles} from "./styles";
import {CreateMeetingForm} from "../CreateMeetingForm";

export function CreateMeeting() {
  const history = useHistory();
  const classes = useStyles();

  const onMyMeetingsClick = () => {
    history.push('/account/meetings');
  };

  return (
    <React.Fragment>
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography component="div" color="inherit" noWrap className={classes.toolbarTitle}>
            <Logo/>
          </Typography>
          <nav>
            <Button onClick={onMyMeetingsClick}>
              My Meetings
            </Button>
          </nav>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" component="main">
        <Grid container spacing={2} alignItems="center" justify="center">
          <Grid item xs={12} md={6} lg={6} className={classes.root}>
            <CreateMeetingForm/>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

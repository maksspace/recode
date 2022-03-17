import React from 'react';
import {useDispatch} from "react-redux";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {TextField} from '@material-ui/core';
import {useParams} from 'react-router-dom';
import Button from "@material-ui/core/Button";

import {Logo} from "../../../components/Logo/Logo";
import {useStyles} from "./styles";
import {joinMeetingThunk} from "../../../store/thunks";
import useJoinLoginNameInput from "../../../hooks/useJoinLoginNameInput";
import {CurrentUserAvatar} from "../../CurrentUserAvatar";
import useCurrentUserAvatar from "../../../hooks/useCurrentUserAvatar";

export function JoinMeeting({onJoin}: any) {
  const dispatch = useDispatch();
  const params = useParams<any>();
  const avatar = useCurrentUserAvatar();
  const loginInput = useJoinLoginNameInput();
  const classes = useStyles();

  const joinMeeting = () => {
    if (loginInput.isValid()) {
      dispatch(joinMeetingThunk(params.meetingId, loginInput.value, avatar.code));
      onJoin();
    }
  };

  const onJoinClick = () => {
    joinMeeting();
  };

  const onJoinEnter = (e: any) => {
    if (e.key === "Enter") {
      joinMeeting();
    }
  };

  return (
    <React.Fragment>
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar>
          <Typography component="div" color="inherit" noWrap>
            <Logo/>
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" component="main" className={classes.joinForm}>
        <Grid container spacing={2} alignItems="center" justify="center">
          <Grid item xs={12} md={4} lg={4}>
            <Grid container justify='center' direction='column' alignItems='center'>
              <Typography variant='h5' component='div' className={classes.readyToJoinText}>
                Ready to join?
              </Typography>
              <CurrentUserAvatar small={false}/>
              <span className={classes.space}>
                Click on Avatar to edit id
              </span>
              <TextField
                variant='outlined'
                placeholder="Your Name"
                onKeyUp={onJoinEnter}
                helperText='Min 2 characters'
                {...loginInput.bind}
              />
              <br/>
              <Button
                onClick={onJoinClick}
                size='large'
                color='primary'
                variant='contained'
              >
                Join
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

import React, {useEffect, useState} from 'react';

import {Toolbar} from './Toolbar';
import {useStyles} from "./styles";
import Grid from "@material-ui/core/Grid";
import {RightSidebar} from "./RightSidebar";
import {CodeEditor} from "./CodeEditor";
import {JoinMeeting} from "./JoinMeeting";
import {useSelector} from "react-redux";
import {isUserJoinedSelector} from "../../store/selectors";
import {FacesSidebar} from "./FacesSidebar";

export default function Meeting() {
  const [join, setJoin] = useState(false);
  const [fullSizeFaces, setFullSizeFaces] = useState(false);
  const isJoined = useSelector(isUserJoinedSelector);
  const classes = useStyles();

  const onJoinHandler = () => {
    setJoin(true);
  };

  const onFullSizeClick = () => {
    setFullSizeFaces(true);
  };

  const onMinimizeClick = () => {
    setFullSizeFaces(false)
  };

  return join || isJoined ? (
    <div className={classes.root}>
      <Toolbar/>
      <main className={classes.mainContent}>
        <FacesSidebar onFullSizeClick={onFullSizeClick}/>
        {/* Disabled bc webrtc not implemented */}
        {/*{fullSizeFaces*/}
        {/*  ? <Faces onMinimizeClick={onMinimizeClick}/>*/}
        {/*  : <FacesSidebar onFullSizeClick={onFullSizeClick}/>}*/}
        <Grid container className={classes.container}>
          <Grid item xs={6} sm={6} md={8} lg={8}>
            <CodeEditor/>
          </Grid>
          <Grid item xs={6} sm={6} md={4} lg={4}>
            <RightSidebar/>
          </Grid>
        </Grid>
      </main>
    </div>
  ) : <JoinMeeting onJoin={onJoinHandler}/>;
}

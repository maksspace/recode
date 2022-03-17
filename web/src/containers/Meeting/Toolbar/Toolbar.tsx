import React, {useEffect, useRef, useState} from 'react';
import Clipboard from "clipboard";
import AppBar from '@material-ui/core/AppBar';
import MuiToolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Logo} from "../../../components/Logo";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import {useStyles} from "./styles";
import {HostOnlyVisible} from "../../HostOnlyVisible";
import {useDispatch, useSelector} from "react-redux";
import {isMeetingLockedSelector} from "../../../store/selectors";
import {setMeetingLocked} from "../../../store/thunks";

export function Toolbar() {
  const dispatch = useDispatch();
  const clipboardRef = useRef<any>();
  const [copyUrlText, setCopyUrl] = useState('Copy url');
  const meetingUrl = window.location.href;
  const meetingLocked = useSelector(isMeetingLockedSelector);
  const classes = useStyles();

  useEffect(() => {
    if (clipboardRef.current) {
      const clipboard = new Clipboard(clipboardRef.current);
      clipboard.on('success', (e) => {
        e.clearSelection();
      });
    }
  }, [clipboardRef.current]);

  const onCopyClick = () => {
    setCopyUrl('Copied!');
    setTimeout(() => {
      setCopyUrl('Copy url')
    }, 2000);
  };

  const onToggleMeetingState = () => {
    dispatch(setMeetingLocked(!meetingLocked));
  };

  return (
    <AppBar className={classes.appBar} elevation={1}>
      <MuiToolbar className={classes.toolbar}>
        <Typography component="div" className={classes.title}>
          <Logo/>
        </Typography>
        <div style={{flex: '1'}}></div>
        <HostOnlyVisible>

          <Button onClick={onToggleMeetingState}>
            <Icon>{meetingLocked ? 'lock' : 'lock_open'}</Icon> {meetingLocked ? 'unlock code' : 'lock code'}
          </Button>
        </HostOnlyVisible>
        &nbsp;
        <Button
          ref={clipboardRef}
          data-clipboard-action="copy"
          data-clipboard-text={meetingUrl}
          onClick={onCopyClick}
        >
          {copyUrlText}&nbsp;<Icon>content_copy</Icon>
        </Button>
      </MuiToolbar>
    </AppBar>
  );
}

import React, {useEffect, useState} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './SocketReady.css';
import {socket} from '../../socket';

type SocketReadyProps = {
  children?: any;
}

export function SocketReady({children}: SocketReadyProps) {

  const [ready, setReady] = useState(false);
  useEffect(() => {
    socket.on('connect', () => {
      setReady(true);
    });
    socket.on('disconnect', () => {
      setReady(false);
    });
  }, [])

  return (
    <>
      {ready ? children : (
        <section className="socket-ready">
          <CircularProgress/>
          <h2 className="socket-ready_title">Connecting to server...</h2>
        </section>
      )}
    </>
  );
}

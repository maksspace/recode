import React from 'react';
import {useStyles} from "./styles";
import {useHistory} from "react-router";

type LogoProps = {
  big?: boolean
};

export function Logo({big}: LogoProps) {
  const history = useHistory();
  const classes = useStyles({big});

  const onLogoClick = () => {
    history.push('/');
  };

  return (
    <h1 onClick={onLogoClick} className={classes.logo}>
      ReCode
    </h1>
  );
}

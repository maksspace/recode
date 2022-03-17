import React from 'react';
import {useStyles} from "./styles";
import Button from "@material-ui/core/Button";

type LogoProps = {
  big?: boolean
};

export function DonateButton({big}: LogoProps) {
  const classes = useStyles({big});

  return (
    <Button color="primary" component='a' href="https://www.patreon.com/maksspace" target="_blank">Patreon</Button>
  );
}

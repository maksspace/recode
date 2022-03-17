import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { useStyles } from "./styles";
import { DonateMoneyIcon } from "../../components/Icons/DonateMoneyIcon";

export function Donation() {
  const classes = useStyles();

  return (
    <>
      <Typography
        variant="body1"
        className={classes.donationTitle}
        color="textSecondary"
        align="center"
      >
        Donations appreciated :)
        <Link
          target="_blank"
          href="https://www.patreon.com/bePatron?u=13746168"
          data-patreon-widget-type="become-patron-button"
        >
          <DonateMoneyIcon />
        </Link>
      </Typography>
      <Typography
        variant="body1"
        className={classes.donationTitle}
        color="textSecondary"
        align="center"
      >
        <Link
          target="_blank"
          href="https://www.patreon.com/bePatron?u=13746168"
          data-patreon-widget-type="become-patron-button"
        >
          Become a Patron!
        </Link>
      </Typography>
    </>
  );
}

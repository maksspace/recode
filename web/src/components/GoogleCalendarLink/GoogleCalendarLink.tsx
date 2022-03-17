import React from 'react';
import Button from "@material-ui/core/Button";
import {GoogleIcon} from "../Icons/GoogleIcon";

type GoogleCalendarLinkProps = {
  title: string;
  details?: string;
};

const crateGoogleCalendarLink = (
  title: string,
  details?: string
) => {
  const host = 'http://www.google.com/calendar/event';
  return `${host}?${[
    'action=TEMPLATE',
    `dates=`,
    `text=${title}`,
    `location=`,
    `details=${details}`
  ].join('&')}`;
}

export function GoogleCalendarLink({title, details}: GoogleCalendarLinkProps) {
  const googleLink = crateGoogleCalendarLink(title, details)
  return (
    <Button variant='outlined' component='a' href={googleLink} target="_blank">
      <GoogleIcon/> &nbsp; Add to Google calendar
    </Button>
  );
}

import React from 'react';
import Button from "@material-ui/core/Button";
import {OutlookIcon} from "../Icons/OutlookIcon";

type OutlookCalendarLinkProps = {
  title: string;
  details?: string;
};

const crateCalendarLink = (
  title: string,
  details?: string
) => {
  const host = 'https://outlook.office.com/calendar/0/deeplink/compose';
  return `${host}?${[
    `body=${details}`,
    `enddt=`,
    'location=LOCATION',
    'path=/calendar/action/compose',
    'rru=addevent',
    'startdt=',
    `subject=${title}`
  ].join('&')}`;
}

export function OutlookCalendarLink({title, details}: OutlookCalendarLinkProps) {
  const link = crateCalendarLink(
    title,
    details
  )
  return (
    <Button variant='outlined' component='a' href={link} target="_blank">
      <OutlookIcon/> &nbsp; Add to Outlook calendar
    </Button>
  );
}

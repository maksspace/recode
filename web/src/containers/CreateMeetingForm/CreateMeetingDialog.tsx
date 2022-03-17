import React from 'react';
import Typography from '@material-ui/core/Typography';
import {TextField, Tooltip} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {DeveloperPosition} from "../../components/DeveloperPosition";
import {GoogleCalendarLink} from "../../components/GoogleCalendarLink";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import {OutlookCalendarLink} from "../../components/OutlookCalendarLink";
import {DevelopmentLanguage} from "../../components/DevelopmentLanguage";
import {useCreateMeetingHooks} from "./hooks";

export function CreateMeetingForm() {
  const {
    nameInput,
    positionInput,
    devLanguageInput,
    descriptionInput,
    classes,
    onCreateMeetingClick,
    clipboardRef,
    meetingUrl,
    eventTitle,
    eventDescription
  } = useCreateMeetingHooks();

  return (
    <section className={classes.form}>
      <Typography variant='h5' component='h1' className={classes.title}>
        Create new meeting
      </Typography>

      <TextField
        label="Developer name"
        variant="outlined"
        {...nameInput.bind}
      />

      <DeveloperPosition {...positionInput.bind}/>
      <DevelopmentLanguage {...devLanguageInput.bind}/>

      <TextField
        multiline
        rows={5}
        label="Description"
        helperText="Code examples, details ..."
        variant="outlined"
        className={classes.field}
        {...descriptionInput.bind}
      />

      <Button
        variant="contained"
        color="primary"
        className={classes.createBtn}
        onClick={onCreateMeetingClick}
      >
        Create meeting
      </Button>

      {meetingUrl && (
        <div className={classes.linkPreview}>
          <span>
            {meetingUrl}
          </span>

          <Tooltip title="Click to copy URL">
            <IconButton
              ref={clipboardRef}
              data-clipboard-action="copy"
              data-clipboard-text={meetingUrl}
              size="small"
              className={classes.lintPreviewCopyIcon}
            >
              <Icon>content_copy</Icon>
            </IconButton>
          </Tooltip>
        </div>
      )}

      {meetingUrl && (
        <div className={classes.actions}>
          <Button component='a' href={meetingUrl} target="_blank" variant="outlined">
            <Icon>link</Icon>
            &nbsp;
            Open in new tab
          </Button>
          <GoogleCalendarLink
            title={eventTitle}
            details={eventDescription}
          />
          <OutlookCalendarLink
            title={eventTitle}
            details={eventDescription}
          />
        </div>
      )}
    </section>
  );
}

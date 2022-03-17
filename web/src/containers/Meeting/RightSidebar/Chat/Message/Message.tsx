import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import Icon from "@material-ui/core/Icon";
import prettyBytes from 'pretty-bytes';
import {useStyles} from "./styles";
import moment from "moment";

type MessageProps = {
  senderName: string;
  date: Date;
  text: string;
  attachments: any[];
};

const IMAGE_REGEXP = /.(jpeg|jpg|png|gif|ico)$/i;

const openInNewTab = (url: string) => {
  const a = document.createElement('a');
  a.target = 'blank';
  a.href = url;
  a.click();
}

export function Message({date, senderName, text, attachments}: MessageProps) {
  const classes = useStyles();

  const onFileClick = (url: string) => {
    openInNewTab(url);
  };

  return (
    <div className={classes.root}>
      <div className={classes.avatarBlock}>
        <Avatar className={classes.avatarIcon}>
          {senderName.slice(0, 2)}
        </Avatar>
      </div>
      <div className={classes.contentBlock}>
        <span className={classes.contentSenderName}>{senderName}</span>
        {text && (
          <span className={classes.contentText}>{text}</span>
        )}
        {
          (attachments || []).map((file, idx) => (
            <span key={idx} className={classes.contentFile} onClick={() => onFileClick(file.url)}>
              <Icon className={classes.contentFileIcon}>
                {IMAGE_REGEXP.test(file.name) ? 'image' : 'insert_drive_file'}
              </Icon>
              <div className={classes.contentFileName}>{file.name}</div>
              <div className={classes.contentFileSize}>{prettyBytes(file.size)}</div>
            </span>
          ))
        }
      </div>
      <span className={classes.dateBlock}>
        {moment(date).format('HH:mm')}
      </span>
    </div>
  );
}

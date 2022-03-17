import React, { useRef, useEffect } from 'react';
import {useSelector} from 'react-redux';
import Paper from "@material-ui/core/Paper";

import {chatMessagesSelector} from "../../../../store/selectors";
import {useStyles} from "./styles";
import {Message} from "./Message";
import {Input} from "./Input";

export function Chat() {
  const listRef = useRef<HTMLDivElement>();
  const messages = useSelector(chatMessagesSelector);
  const classes = useStyles();

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTo({
        top: listRef.current.scrollHeight
      })
    }
  }, [messages.length])

  return (
    <Paper className={classes.root}>
      <section ref={listRef as any} className={classes.messagesList}>
        {messages.map((message: any, idx) => (
          <Message
            key={idx}
            senderName={message.senderName}
            text={message.text}
            attachments={message.attachments}
            date={message.createdAt}
          />
        ))}
      </section>
      <Input/>
    </Paper>
  );
}

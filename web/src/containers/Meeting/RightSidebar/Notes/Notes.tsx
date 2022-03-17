import React, { useState } from "react";
import { useStyles } from "./styles";

export function Notes() {
  const [value, setValue] = useState("");
  const classes = useStyles();

  const onEdit = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <div className={classes.root}>
      <textarea
        className={classes.input}
        placeholder="Type your notes here ... (Markdown)"
        onChange={onEdit}
      />
    </div>
  );
}

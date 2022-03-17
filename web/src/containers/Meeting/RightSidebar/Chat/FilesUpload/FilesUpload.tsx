import React, {useRef, useState} from 'react';
import prettyBytes from 'pretty-bytes';
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import {CircularProgress, Dialog, DialogActions, DialogContent, ListItemIcon, TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import {useStyles} from "./styles";
import {uploadFiles} from "./api";
import {nanoid} from "nanoid";
import {useDispatch} from "react-redux";
import {sendChatMessageThunk} from "../../../../../store/thunks";
import {useInput} from '../../../../../hooks/useInput';

export function FilesUpload() {
  const dispatch = useDispatch();
  const [files, setFiles] = useState<{ id: string; file: File }[]>([]);
  const commentInput = useInput('');
  const [uploading, setUploading] = useState(false);
  const inputRef = useRef<any>();
  const classes = useStyles();

  const onFilesSelected = (e: any) => {
    const selectedFiles: any[] = [];
    for (const file of e.target.files) {
      files.push({id: nanoid(), file})
    }
    setFiles([...files, ...selectedFiles]);
    e.target.value = '';
  };

  const onFileSelect = () => {
    inputRef.current?.click()
  };

  const onRemoveFile = (id: string) => {
    setFiles(files.filter(file => file.id !== id));
  };

  const onCancel = () => {
    setFiles([]);
    setUploading(false);
    commentInput.reset();
  };

  const onSend = async () => {
    try {
      setUploading(true);
      const uploaded = await uploadFiles(files.map(f => f.file));
      const attachments = uploaded.map((f: any) => ({
        name: f.name,
        url: f.url,
        mimeType: f.mimeType,
        size: f.size
      }));
      const commentText = commentInput.value || undefined;
      dispatch(sendChatMessageThunk({attachments, text: commentText}));
    } catch (e) {
      alert('Sorry, files to upload files');
    }
    onCancel();
  };

  return (
    <>
      <IconButton size='small' onClick={onFileSelect}>
        <Icon className={classes.attachmentIcon}>
          attach_file
        </Icon>
      </IconButton>
      <input
        type='file'
        ref={inputRef}
        multiple
        className={classes.fileInput}
        onInput={onFilesSelected}
      />
      <Dialog open={files.length > 0}>
        <DialogContent>
          <List>
            {files.map(({id, file}) => (
              <ListItem key={id}>
                <ListItemAvatar>
                  <Avatar className={classes.fileItemIcon}>
                    {uploading && <CircularProgress className={classes.fileLoading}/>}
                    <Icon>{
                      file.type.match('image/*')
                        ? 'insert_photo'
                        : 'insert_drive_file'
                    }</Icon>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={file.name}
                  secondary={prettyBytes(file.size)}
                />
                <ListItemIcon>
                  <IconButton disabled={uploading} onClick={() => onRemoveFile(id)}>
                    <Icon>clear</Icon>
                  </IconButton>
                </ListItemIcon>
              </ListItem>
            ))}
          </List>
          <TextField placeholder='Comment' fullWidth {...commentInput.bind}/>
        </DialogContent>
        <DialogActions>
          <Button color='primary' disabled={uploading} onClick={onFileSelect}>
            Add
          </Button>
          <div style={{flex: 1}}/>
          <Button color='primary' onClick={onCancel}>
            Cancel
          </Button>
          <Button color='primary' disabled={uploading} onClick={onSend}>
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

import {useEffect, useRef, useState} from "react";
import {useInput} from "../../hooks/useInput";
import {useStyles} from "./styles";
import Clipboard from "clipboard";
import {nanoid} from "nanoid";
import {useDispatch} from "react-redux";
import {createMeetingThunk} from "../../store/thunks";
import {config} from "../../config";

export function useCreateMeetingHooks() {
  const dispatch = useDispatch();
  const clipboardRef = useRef<any>();
  const [meetingId, setMeetingId] = useState('');
  const [meetingUrl, setMeetingUrl] = useState('');
  const [eventTitle, setEventTitle] = useState('');
  const [eventDescription, setEventDesc] = useState('');
  const nameInput = useInput('');
  const positionInput = useInput('');
  const devLanguageInput = useInput('typescript');
  const descriptionInput = useInput('');
  const classes = useStyles();

  useEffect(() => {
    let clipboard: any;
    if (clipboardRef.current) {
      if (clipboard) {
        clipboard.destroy();
      }
      clipboard = new Clipboard(clipboardRef.current);
      clipboard.on('success', (e: any) => {
        e.clearSelection();
      });
    }
  }, [meetingUrl]);

  useEffect(() => {
    setEventTitle(!nameInput.isEmpty() || !positionInput.isEmpty()
      ? `Interview ${nameInput.value} ${positionInput.value} Developer ${devLanguageInput.isEmpty() ? '' : `(${devLanguageInput.value})`}`
        .replaceAll(/ +/g, ' ')
      : '');
    console.log(`${config.host}/@${meetingId}`)
    setMeetingUrl(!meetingId ? '' : `${config.host}/@${meetingId}`);
    setEventDesc(`
        Meeting URL: <a href="${meetingUrl}">${meetingUrl}</a><br/>
        ${descriptionInput.value}
    `.trim());
  }, [meetingId]);

  const onCreateMeetingClick = () => {
    const meetingId = nanoid();
    dispatch(createMeetingThunk(meetingId));
    setMeetingId(meetingId);
  };

  return {
    clipboardRef,
    nameInput,
    positionInput,
    devLanguageInput,
    descriptionInput,
    classes,
    meetingUrl,
    onCreateMeetingClick,
    eventTitle,
    eventDescription
  };
}

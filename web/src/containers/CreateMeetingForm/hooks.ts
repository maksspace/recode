import {useEffect, useRef, useState} from "react";
import {useInput} from "../../hooks/useInput";
import {useStyles} from "./styles";
import Clipboard from "clipboard";
import {nanoid} from "nanoid";
import {useHistory} from "react-router";
import {useDispatch} from "react-redux";
import {createMeetingThunk} from "../../store/thunks";
import {config} from "../../config";

export function useCreateMeetingHooks() {
  const dispatch = useDispatch();
  const history = useHistory();
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
    if (clipboardRef.current) {
      const clipboard = new Clipboard(clipboardRef.current);
      clipboard.on('success', (e) => {
        e.clearSelection();
      });
    }
  }, [clipboardRef.current, meetingId]);

  useEffect(() => {
    setEventTitle(!nameInput.isEmpty() || !positionInput.isEmpty()
      ? `Interview ${nameInput.value} ${positionInput.value} Developer ${devLanguageInput.isEmpty() ? '' : `(${devLanguageInput.value})`}`
        .replaceAll(/ +/g, ' ')
      : '');
    setMeetingUrl(!meetingId ? '' : `${config.host}/@${meetingId}`);
    setEventDesc(`
        Meeting URL: <a href="${meetingUrl}">${meetingUrl}</a><br/>
        ${descriptionInput.value}
    `.trim());
  }, [meetingId]);

  const onCreateMeetingClick = () => {
    const meetingId = nanoid();
    dispatch(createMeetingThunk({
      id: meetingId,
      title: eventTitle
    }));
    setMeetingId(meetingId);
  };

  const onMyMeetingsClick = () => {
    history.push('/meetings');
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
    onMyMeetingsClick,
    eventTitle,
    eventDescription
  };
}

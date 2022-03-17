import {useState} from "react";

const MEETINGS_KEY = '_reecallapp_local_meetings_list';

export function useMeetingsList() {
  const [dialog, setDialog] = useState(false);
  const meetingsList: any[] = JSON.parse(localStorage.getItem(MEETINGS_KEY) || '[]');

  const onDialogClose = () => {
    setDialog(false);
  };

  const onDialogOpen = () => {
    setDialog(true);
  };

  return {
    dialog,
    onDialogClose,
    onDialogOpen,
    meetingsList
  };
}

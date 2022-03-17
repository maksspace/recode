import {useState} from "react";

const KEY = '_reecallapp_local_interview-templates_list';

export function useInterviewTemplates() {
  const [dialog, setDialog] = useState(false);
  const templatesList: any[] = JSON.parse(localStorage.getItem(KEY) || '[]');

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
    templatesList
  };
}

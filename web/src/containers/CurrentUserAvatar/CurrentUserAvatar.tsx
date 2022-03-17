import React, {useState} from 'react';
import {ParticipantAvatar} from "../../components/ParticipantAvatar";
import {useDispatch, useSelector} from "react-redux";
import {currentUserSelector} from "../../store/selectors";
import {AvatarMakerDialog} from "../../components/AvatarMakerDialog";
import useCurrentUserAvatar from "../../hooks/useCurrentUserAvatar";

type CurrentUserAvatarProps = {
  small: boolean;
}

export function CurrentUserAvatar({small}: CurrentUserAvatarProps) {
  const dispatch = useDispatch();
  const [dialog, setDialog] = useState(false);
  const avatarCode = useCurrentUserAvatar();
  const user = useSelector(currentUserSelector);

  const onCloseDialog = () => {
    setDialog(false)
  };

  const onOkDialog = (code: string) => {
    console.log(code)
    avatarCode.setCode(code)
    setDialog(false)
  };

  return (
    <>
      <AvatarMakerDialog
        open={dialog}
        color={user.color}
        avatarCode={avatarCode.code}
        onClose={onCloseDialog}
        onSave={onOkDialog}
      />
      <ParticipantAvatar
          currentUser={true}
        small={small}
        participant={{...user, avatar: avatarCode.code}}
        onClick={() => setDialog(true)}
      />
    </>
  );
}

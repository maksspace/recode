import React from 'react';
import {useStyles} from "./styles";
import {UserAvatar} from "../UserAvatar";
import * as options from "./options";
import {SelectItems} from "../SelectItems";
import {useInput} from "../../hooks/useInput";
import Dialog from "@material-ui/core/Dialog";
import {DialogActions, DialogTitle} from "@material-ui/core";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";

export type UserAvatarProps = {
  open: boolean;
  avatarCode: string;
  color: string;
  onClose: () => void;
  onSave: (code: string) => void;
};

export function AvatarMakerDialog(props: UserAvatarProps) {
  const avatarCode = JSON.parse(props.avatarCode || '{}');
  const topInput = useInput(avatarCode.topType);
  const accessoriesInput = useInput(avatarCode.accessoriesType);
  const hairColorInput = useInput(avatarCode.hairColor);
  const facialHairInput = useInput(avatarCode.facialHairType);
  const facialHairColorInput = useInput(avatarCode.facialHairColor);
  const clothesInput = useInput(avatarCode.clotheType);
  const clothesColorInput = useInput(avatarCode.clotheColor);
  const eyesInput = useInput(avatarCode.eyeType);
  const eyebrowInput = useInput(avatarCode.eyebrowType);
  const mouthInput = useInput(avatarCode.mouthType);
  const skinInput = useInput(avatarCode.skinColor);
  const classes = useStyles(props);

  const avatarConfig = {
    topType: topInput.value,
    accessoriesType: accessoriesInput.value,
    hairColor: hairColorInput.value,
    facialHairType: facialHairInput.value,
    facialHairColor: facialHairColorInput.value,
    clotheType: clothesInput.value,
    clotheColor: clothesColorInput.value,
    eyeType: eyesInput.value,
    eyebrowType: eyebrowInput.value,
    mouthType: mouthInput.value,
    skinColor: skinInput.value,
  }

  const onCloseDialog = () => {
    props.onClose();
  };

  const onOkDialog = () => {
    props.onSave(JSON.stringify(avatarConfig))
  };

  return (
    <Dialog open={props.open} onClose={onCloseDialog}>
      <DialogTitle>
        Edit Avatar
      </DialogTitle>
      <DialogContent className={classes.root}>
        <div className={classes.root}>
          <div className={classes.config}>
            <SelectItems label="Top" items={options.TOPS} {...topInput.bind}/>
            <SelectItems label="Accessories" items={options.ACCESSORIES} {...accessoriesInput.bind}/>
            <SelectItems label="Hair Color" items={options.HAIR_COLORS} {...hairColorInput.bind}/>
            <SelectItems label="Facial Hair" items={options.FACIAL_HAIR} {...facialHairInput.bind}/>
            <SelectItems label="Facial Hair Color" items={options.FACIAL_HAIR_COLOR} {...facialHairColorInput.bind}/>
            <SelectItems label="Clothes" items={options.CLOTHES} {...clothesInput.bind}/>
            <SelectItems label="Clothes Color Fabric" items={options.CLOTHES_COLOR} {...clothesColorInput.bind}/>
            <SelectItems label="Eyes" items={options.EYES} {...eyesInput.bind}/>
            <SelectItems label="Eyebrow" items={options.EYEBROWS} {...eyebrowInput.bind}/>
            <SelectItems label="Mouth" items={options.MOUTHS} {...mouthInput.bind}/>
            <SelectItems label="Skin" items={options.SKIN_COLORS} {...skinInput.bind}/>
          </div>
          <div className={classes.preview}>
            <UserAvatar color={props.color} size={180} avatarConfig={avatarConfig}/>
            <span className={classes.info}>
              This avatar will be visible for other participants of the meeting
            </span>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCloseDialog}>
          Cancel
        </Button>
        <Button color="primary" variant="contained" onClick={onOkDialog}>
          Save
        </Button>
      </DialogActions>
    </Dialog>

  )
}

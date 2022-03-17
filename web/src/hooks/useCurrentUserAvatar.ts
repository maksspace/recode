import {useEffect, useState} from "react";

const KEY = '_reecallapp_current_user_avatar';

const defaultCode = '{"topType":"ShortHairShortFlat","accessoriesType":"Blank","hairColor":"Black","facialHairType":"BeardMedium","facialHairColor":"Red","clotheType":"Hoodie","clotheColor":"Heather","eyeType":"Default","eyebrowType":"DefaultNatural","mouthType":"Smile","skinColor":"Pale"}'

export default function useCurrentUserAvatar() {
  const [avatarCode, setAvatarCode] = useState(localStorage.getItem(KEY) || defaultCode);

  const setCode = (code: string) => {
    localStorage.setItem(KEY, code);
    setAvatarCode(code)
  };

  useEffect(() => {
    if (!localStorage.getItem(KEY)) {
      localStorage.setItem(KEY, defaultCode)
    }
  }, [])

  return {
    code: avatarCode,
    setCode
  }
}

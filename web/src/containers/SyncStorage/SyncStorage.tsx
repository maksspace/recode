import React, {useEffect, useState} from 'react';
import useIncognitoUserId from "../../hooks/useIncognitoUserId";

export function SyncStorage({children}: any) {
  const [created, setCreated] = useState(false);
  const incognitoUserId = useIncognitoUserId();

  useEffect(() => {
    if (incognitoUserId) {
      setCreated(true);
    }
  }, [incognitoUserId]);

  return created ? children : null;
}

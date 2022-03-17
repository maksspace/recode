import {useEffect, useState} from 'react';
import {nanoid} from "nanoid";

const ID_KEY = '_reecallapp_incognito_id';

export default function useIncognitoUserId() {
  const [id, setID] = useState('');

  useEffect(() => {
    const id = localStorage.getItem(ID_KEY);
    if (id) {
      setID(id);
    } else {
      const id = nanoid();
      localStorage.setItem(ID_KEY, id);
      setID(id);
    }
  }, []);

  return id;
}

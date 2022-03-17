import {useEffect} from 'react';
import {useInput} from "./useInput";

const LOGIN_KEY = '_reecallapp_join_login';

export default function useJoinLoginNameInput() {
  const loginInput = useInput(localStorage.getItem(LOGIN_KEY) || '', v => (v || '').length > 2)

  useEffect(() => {
    localStorage.setItem(LOGIN_KEY, loginInput.value);
  }, [loginInput.value]);

  return loginInput;
}

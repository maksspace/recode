import {useState} from "react";

export const useInput = (initialValue: string, validate?: (...args: any[]) => boolean) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    reset: (v?: string) => setValue(v || ""),
    isEmpty: () => !value.trim()?.length,
    isValid: () => typeof validate === 'function' ? validate(value) : true,
    bind: {
      value,
      onChange: (e: any) => {
        if (typeof e === 'string') {
          setValue(e);
        } else if (e?.target) {
          setValue(e.target.value);
        }
      }
    }
  };
};

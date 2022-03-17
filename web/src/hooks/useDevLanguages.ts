import {useEffect, useState} from "react";
import {useMonaco} from "@monaco-editor/react";

export function useDevLanguages(): string[] {
  const [languages, setLanguages] = useState([]);
  const monaco = useMonaco();

  useEffect(() => {
    if (monaco) {
      const langs = monaco.languages.getLanguages();
      setLanguages(langs.map((i: any) => i.id));
    }
  }, [monaco]);

  return languages;
}

import { useEffect, useState } from "react";

type Options = {
  words: string[];
  typingSpeed?: number;   // ms
  deletingSpeed?: number; // ms
  pauseTime?: number;     // ms
};

export function useTypewriter({
  words,
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseTime = 1200,
}: Options) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    let timer = window.setTimeout(() => {
      if (!isDeleting) {
        // typing
        setText(currentWord.substring(0, text.length + 1));

        // word complete → pause then start deleting
        if (text.length + 1 === currentWord.length) {
          window.setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // deleting
        setText(currentWord.substring(0, text.length - 1));

        // deleted fully → next word
        if (text.length - 1 === 0) {
          setIsDeleting(false);
          setWordIndex((i) => i + 1);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => window.clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
}
import { useState, useEffect } from "react";

export default function TypewriterText({ text, speed = 100 }: { text: string; speed?: number }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    setDisplayedText("");
    const timer = setInterval(() => {
      index++;
      setDisplayedText(text.substring(0, index));
      if (index >= text.length) clearInterval(timer);
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return <span>{displayedText}<span className="animate-pulse">_</span></span>;
}

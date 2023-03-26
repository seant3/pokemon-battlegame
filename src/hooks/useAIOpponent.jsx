import { useState, useEffect } from "react";

export const useAIOpponent = (turn) => {
  const [aiChoice, setAIChoice] = useState("");

  useEffect(() => {
    if (turn === 1) {
      const options = ["attack", "magic", "heal"];
      setAIChoice(options[Math.floor(Math.random() * options.length)]);
    }
  }, [turn]);

  return aiChoice;
};

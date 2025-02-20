import { useEffect, useState } from "react";

import { emojiService } from "./emojiService";

export function useEmoji(backgroundColor: string) {
  const [emoji, setEmoji] = useState("👋");

  function getRandomEmoji() {
    const getEmoji = emojiService.getRandomEmoji();

    setEmoji(getEmoji);
  }

  useEffect(() => {
    getRandomEmoji();
  }, [backgroundColor]);

  return { emoji };
}

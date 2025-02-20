import { mappedEmojis } from "@utils";

function getRandomEmoji() {
  return mappedEmojis[Math.floor(Math.random() * mappedEmojis.length)];
}

export const emojiService = {
  getRandomEmoji,
};

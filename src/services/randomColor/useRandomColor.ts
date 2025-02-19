import { useState } from "react";

import { randomColorService } from "./randomColorService";

export function useRandomColor() {
  const [backgroundColor, setBackgroundColor] = useState<string>("#FFF");

  function getRandomColor() {
    const color = randomColorService.generateRandomColor();

    setBackgroundColor(color);
  }

  return {
    getRandomColor,
    backgroundColor,
  };
}

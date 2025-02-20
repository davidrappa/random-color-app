import { useState } from "react";

import { randomColorService } from "./randomColorService";

export function useRandomColor() {
  const [backgroundColor, setBackgroundColor] = useState<string>("#FFF");
  const [isDarkColor, setIsDarkColor] = useState<boolean>(false);

  function getRandomColor() {
    const color = randomColorService.generateRandomColor();
    const isDark = randomColorService.verifyIfColorIsDark(color);

    setIsDarkColor(isDark);
    setBackgroundColor(color);
  }

  return {
    getRandomColor,
    backgroundColor,
    isDarkColor,
  };
}

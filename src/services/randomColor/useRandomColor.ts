import { useState } from "react";

import { randomColorService } from "./randomColorService";

import { useAppTheme } from "@hooks";

import { delay } from "@utils";

export function useRandomColor() {
  const { colors } = useAppTheme();

  const [backgroundColor, setBackgroundColor] = useState<string>(colors.white);
  const [isDarkColor, setIsDarkColor] = useState<boolean>(false);

  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false);

  function getRandomColor() {
    const color = randomColorService.generateRandomColor();
    const isDark = randomColorService.verifyIfColorIsDark(color);

    setIsDarkColor(isDark);
    setBackgroundColor(color);
  }

  function setSpecificColor(color: string) {
    const isDark = randomColorService.verifyIfColorIsDark(color);

    setIsDarkColor(isDark);
    setBackgroundColor(color);
  }

  async function toggleColorPalletDialog() {
    if (isOpenDialog) {
      return setIsOpenDialog(false);
    }

    setIsOpenDialog(true);

    await delay(8000);

    setIsOpenDialog(false);
  }

  return {
    getRandomColor,
    setSpecificColor,
    toggleColorPalletDialog,
    backgroundColor,
    isDarkColor,
    isOpenDialog,
  };
}

import { useEffect, useState } from "react";

import { randomColorService } from "./randomColorService";

import { useAppTheme } from "@hooks";
import { DialogType } from "./randomColorTypes";
import { delay } from "@utils";

export function useRandomColor() {
  const { colors } = useAppTheme();

  const [backgroundColor, setBackgroundColor] = useState<string>(colors.white);
  const [isDarkColor, setIsDarkColor] = useState<boolean>(false);

  const [isOpenDialog, setIsOpenDialog] = useState<DialogType | null>(null);

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

  async function toggleColorPalletDialog(type: DialogType) {
    if (type === isOpenDialog) {
      return setIsOpenDialog(null);
    }

    setIsOpenDialog(type);

    await delay(8000);

    setIsOpenDialog(null);
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

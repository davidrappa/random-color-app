import { colors } from "./colors";

export const theme = {
  colors,
};

export type Theme = typeof theme;
export type ThemeColors = keyof Theme["colors"];

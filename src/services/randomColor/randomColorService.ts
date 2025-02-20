const MAX_HEX_COLOR_VALUE = 16777215;

/**
 * @description Generate a random color in hexadecimal format
 * @returns {string} Random color in hexadecimal format
 */
function generateRandomColor(): string {
  const randomMathNumber = Math.floor(Math.random() * MAX_HEX_COLOR_VALUE);

  const getHexColor = randomMathNumber.toString(16);

  return `#${getHexColor.padStart(6, "0")}`;
}

function convertHexToRGB(hexColor: string) {
  const formatHex = hexColor.replace("#", "");

  const r = parseInt(formatHex.substring(0, 2), 16);
  const g = parseInt(formatHex.substring(2, 4), 16);
  const b = parseInt(formatHex.substring(4, 6), 16);

  return { r, g, b };
}

/**
 * @description Verify if a color is dark
 * @returns {boolean} True if the color is dark, false if is not
 */
function verifyIfColorIsDark(hexColor: string): boolean {
  const { r, g, b } = convertHexToRGB(hexColor);

  const brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b;

  return brightness < 128;
}

export const randomColorService = {
  generateRandomColor,
  verifyIfColorIsDark,
};

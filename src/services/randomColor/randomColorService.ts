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

export const randomColorService = {
  generateRandomColor,
};

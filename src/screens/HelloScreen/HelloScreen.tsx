import React from "react";

import { Box, BoxStyleProps, Screen, Text, TouchableBox } from "@components";
import { useEmoji, useRandomColor } from "@services";
import { useAppTheme } from "@hooks";

export function HelloScreen() {
  const { backgroundColor, isDarkColor, getRandomColor } = useRandomColor();
  const { emoji } = useEmoji(backgroundColor);
  const { colors } = useAppTheme();

  return (
    <Screen backgroundColor={backgroundColor}>
      <TouchableBox onPress={getRandomColor}>
        <Box style={$boxStyle}>
          <Text
            fontWeight="bold"
            fontSize={28}
            color={isDarkColor ? colors.white : colors.black}
          >
            Hello there {emoji}
          </Text>
        </Box>
      </TouchableBox>
    </Screen>
  );
}

const $boxStyle: BoxStyleProps = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
};

import React from "react";

import { Box, BoxStyleProps, Screen, Text, TouchableBox } from "@components";
import { useEmoji, useRandomColor } from "@services";

export function HelloScreen() {
  const { backgroundColor, isDarkColor, getRandomColor } = useRandomColor();
  const { emoji } = useEmoji(backgroundColor);

  return (
    <Screen backgroundColor={backgroundColor}>
      <TouchableBox onPress={getRandomColor}>
        <Box style={$boxStyle}>
          <Text
            fontWeight="bold"
            fontSize={28}
            color={isDarkColor ? "#fff" : "#000"}
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

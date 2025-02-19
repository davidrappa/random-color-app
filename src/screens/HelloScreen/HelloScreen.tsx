import React from "react";

import { Box, BoxStyleProps, Screen, Text, TouchableBox } from "@components";
import { useRandomColor } from "@services";

export function HelloScreen() {
  const { backgroundColor, getRandomColor } = useRandomColor();

  return (
    <Screen backgroundColor={backgroundColor}>
      <TouchableBox onPress={getRandomColor}>
        <Box style={$boxStyle}>
          <Text fontWeight="bold" fontSize={28} color="#000">
            Hello there
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

import React from "react";

import { Box, BoxStyleProps, Screen, Text, TouchableBox } from "@components";
import { DialogType, useEmoji, useRandomColor } from "@services";
import { useAppTheme } from "@hooks";

import { HelloBottom } from "./components/HelloBottom";
import { HelloPickColor } from "./components";

export function HelloScreen() {
  const {
    backgroundColor,
    isDarkColor,
    isOpenDialog,
    getRandomColor,
    setSpecificColor,
    toggleColorPalletDialog,
  } = useRandomColor();
  const { emoji } = useEmoji(backgroundColor);
  const { colors } = useAppTheme();

  return (
    <Screen backgroundColor={backgroundColor}>
      <TouchableBox
        activeOpacity={1}
        onPress={getRandomColor}
        style={{ flex: 1, position: "relative" }}
      >
        <Box style={$boxStyle}>
          <Text
            fontWeight="bold"
            fontSize={28}
            color={isDarkColor ? colors.white : colors.black}
          >
            Hello there {emoji}
          </Text>
        </Box>
        <HelloBottom
          isDarkColor={isDarkColor}
          onPressIcon={toggleColorPalletDialog}
        >
          {isOpenDialog === DialogType.Colors && (
            <HelloPickColor setSpecificColor={setSpecificColor} />
          )}
        </HelloBottom>
      </TouchableBox>
    </Screen>
  );
}

const $boxStyle: BoxStyleProps = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
};

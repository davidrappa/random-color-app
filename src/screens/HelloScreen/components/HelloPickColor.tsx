import React from "react";

import { Box, BoxStyleProps, TouchableBox } from "@components";
import { colors } from "@theme";

interface HelloPickColor {
  setSpecificColor: (color: string) => void;
}

export function HelloPickColor({ setSpecificColor }) {
  return (
    <Box style={$boxSelectBar}>
      {Object.values(colors).map((color) => (
        <TouchableBox
          onPress={() => setSpecificColor(color)}
          key={color}
          style={[{ backgroundColor: color }, $boxColor]}
        />
      ))}
    </Box>
  );
}

const $boxSelectBar: BoxStyleProps = {
  justifyContent: "center",
  backgroundColor: "#c1c1c13b",
  padding: 8,
  borderRadius: 12,
  flexDirection: "row",
  flexWrap: "wrap",
  gap: 12,
};

const $boxColor: BoxStyleProps = {
  width: 30,
  height: 30,
  borderRadius: 15,
};

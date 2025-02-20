import React from "react";

import { Box, BoxStyleProps, Icon } from "@components";
import { useAppSafeArea } from "@hooks";
import { DialogType } from "@services";

interface HelloBottomProps {
  children: React.ReactNode;
  isDarkColor: boolean;
  onPressIcon: (type: DialogType) => void;
}

export function HelloBottom({
  children,
  isDarkColor,
  onPressIcon,
}: HelloBottomProps) {
  const { bottom } = useAppSafeArea();

  return (
    <Box style={[{ bottom: bottom + 30 }, $boxStyle]}>
      <Box>
        {children || null}
        <Box style={$boxIcons}>
          <Icon
            name="brightnessIcon"
            size={28}
            color={isDarkColor ? "white" : "black"}
            onPress={() => onPressIcon(DialogType.Bright)}
          />
          <Icon
            name="palletIcon"
            size={28}
            color={isDarkColor ? "white" : "black"}
            onPress={() => onPressIcon(DialogType.Colors)}
          />
        </Box>
      </Box>
    </Box>
  );
}

const $boxStyle: BoxStyleProps = {
  position: "absolute",
  flexDirection: "row",
  padding: 60,
  alignSelf: "center",
};

const $boxIcons: BoxStyleProps = {
  flexDirection: "row",
  marginTop: 30,
  alignSelf: "center",
  gap: 60,
};

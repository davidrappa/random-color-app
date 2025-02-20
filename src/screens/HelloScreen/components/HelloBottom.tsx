import React from "react";

import { Box, BoxStyleProps, Icon } from "@components";
import { useAppSafeArea } from "@hooks";

interface HelloBottomProps {
  children: React.ReactNode;
  isDarkColor: boolean;
  onPress: () => void;
}

export function HelloBottom({
  children,
  isDarkColor,
  onPress,
}: HelloBottomProps) {
  const { bottom } = useAppSafeArea();

  return (
    <Box style={[{ bottom: bottom + 30 }, $boxStyle]}>
      <Box>
        {children || null}
        <Box style={$boxIcons}>
          <Icon
            name="palletIcon"
            size={28}
            color={isDarkColor ? "white" : "black"}
            onPress={onPress}
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

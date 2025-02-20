import React from "react";
import { Pressable } from "react-native";

import { useAppTheme } from "@hooks";
import { ThemeColors } from "@theme";

import { BrightnessIcon } from "../../assets/icons/BrightnessIcon";
import { PalletIcon } from "../../assets/icons/PalletIcon";

export interface IconBase {
  size?: number;
  color?: string;
  fillColor?: string;
}

export interface IconProps {
  name: IconName;
  color?: ThemeColors;
  fillColor?: ThemeColors;
  size?: number;
  onPress?: () => void;
}
export function Icon({
  name,
  color = "black",
  fillColor = "black",
  size,
  onPress,
}: IconProps) {
  const { colors } = useAppTheme();
  const SVGIcon = iconRegistry[name];

  const iconProps: React.ComponentProps<typeof SVGIcon> = {
    size,
    color: colors[color],
    fillColor: colors[fillColor],
  };

  if (onPress) {
    return (
      <Pressable hitSlop={10} onPress={onPress}>
        <SVGIcon {...iconProps} />
      </Pressable>
    );
  }

  return <SVGIcon {...iconProps} />;
}

const iconRegistry = {
  brightnessIcon: BrightnessIcon,
  palletIcon: PalletIcon,
};

type IconType = typeof iconRegistry;

type IconName = keyof IconType;

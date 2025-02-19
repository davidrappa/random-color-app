import React from "react";

import { Text as RNText, TextProps as RNTextProps } from "react-native";

export interface TextProps extends RNTextProps {
  color?: string;
  fontSize?: number;
  fontWeight?: "bold" | "normal";
}

export function Text({
  children,
  color,
  fontSize,
  fontWeight = "normal",
  ...rnTextProps
}: TextProps) {
  return (
    <RNText style={[{ color, fontSize, fontWeight }, rnTextProps.style]}>
      {children}
    </RNText>
  );
}

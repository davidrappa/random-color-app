import React from "react";
import { View, ViewProps } from "react-native";

export type BoxStyleProps = ViewProps["style"];

export interface BoxProps extends ViewProps {
  children: React.ReactNode;
}

export function Box({ children, ...boxProps }: BoxProps) {
  return <View {...boxProps}>{children}</View>;
}

import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

export interface TouchableBoxProps extends TouchableOpacityProps {
  children?: React.ReactNode;
}

export function TouchableBox({
  children,
  ...touchableOpacityProps
}: TouchableBoxProps) {
  return (
    <TouchableOpacity {...touchableOpacityProps}>{children}</TouchableOpacity>
  );
}

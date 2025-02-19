import React from "react";
import {
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
} from "react-native";

export interface TouchableBoxProps extends TouchableWithoutFeedbackProps {
  children: React.ReactNode;
}

export function TouchableBox({
  children,
  ...touchableWithoutFeedbackProps
}: TouchableBoxProps) {
  return (
    <TouchableWithoutFeedback {...touchableWithoutFeedbackProps}>
      {children}
    </TouchableWithoutFeedback>
  );
}

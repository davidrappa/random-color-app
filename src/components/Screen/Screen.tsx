import React from "react";
import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView, Platform, View, ViewProps } from "react-native";

import { useAppSafeArea } from "@hooks";

export interface ScreenProps extends ViewProps {
  children: React.ReactNode;
  backgroundColor?: string;
}

export function Screen({
  children,
  backgroundColor,
  ...screenProps
}: ScreenProps) {
  const { top } = useAppSafeArea();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View
        style={[
          { backgroundColor, flex: 1, paddingTop: top },
          screenProps.style,
        ]}
        {...screenProps}
      >
        <StatusBar style="auto" />
        {children}
      </View>
    </KeyboardAvoidingView>
  );
}

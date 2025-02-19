import { useSafeAreaInsets } from "react-native-safe-area-context";

const SPACING = 20;

export function useAppSafeArea() {
  const { top, bottom } = useSafeAreaInsets();

  return {
    top: Math.max(top, SPACING),
    bottom: Math.max(bottom, SPACING),
  };
}

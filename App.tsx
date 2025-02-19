import { SafeAreaProvider } from "react-native-safe-area-context";

import { HelloScreen } from "@screens";

export default function App() {
  return (
    <SafeAreaProvider>
      <HelloScreen />
    </SafeAreaProvider>
  );
}

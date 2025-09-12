import { ThemeProvider } from "@/src/context/theme-context";
import { Stack } from "expo-router";
export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </ThemeProvider>
  );
}

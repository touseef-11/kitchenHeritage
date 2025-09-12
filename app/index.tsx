import { useTheme } from "@/src/context/theme-context";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: theme.colors.text, fontSize: 20 }}>
        {isDark ? "Dark Mode " : "Light Mode "}
      </Text>

      <TouchableOpacity
        onPress={toggleTheme}
        style={{
          marginTop: 20,
          backgroundColor: theme.colors.primary,
          padding: theme.spacing.md,
          borderRadius: theme.radius.lg,
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "600" }}>Toggle Theme</Text>
      </TouchableOpacity>
    </View>
  );
}

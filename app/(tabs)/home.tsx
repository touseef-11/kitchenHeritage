import { useTheme } from "@/src/context/theme-context";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const { theme } = useTheme();
  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      {/* <Text variant="h1">Home</Text> */}
      <Text style={{ color: theme.colors.accent }}>
        Browse delicious meals and order now
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

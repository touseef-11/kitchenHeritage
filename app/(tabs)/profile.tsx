import Text from "@/src/components/ui/tesxt";
import { useTheme } from "@/src/context/theme-context";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function ProfileScreen() {
  const { theme } = useTheme();
  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Text variant="h1">Profile</Text>
      <Text variant="body" color="textSecondary">
        Manage your account & settings
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

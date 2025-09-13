// src/components/ui/Button.tsx
import { useTheme } from "@/src/context/theme-context";
import React from "react";
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

interface ButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
}

export default function Button({
  title,
  onPress,
  variant = "primary",
  fullWidth,
}: ButtonProps) {
  const { theme } = useTheme();

  const backgroundColor =
    variant === "primary" ? theme.colors.primary : theme.colors.drinkHighlight;

  const textColor = variant === "primary" ? "#fff" : theme.colors.text;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor,
          padding: theme.spacing.md,
          borderRadius: theme.radius.md,
          width: fullWidth ? "100%" : "auto",
          ...theme.shadows.sm,
        },
      ]}
    >
      <Text style={{ color: textColor, fontWeight: "600" }}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
  },
});

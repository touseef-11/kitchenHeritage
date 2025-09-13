import { useTheme } from "@/src/context/theme-context";
import { lightTheme } from "@/src/theme";
import React from "react";
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleProp,
  TextStyle,
} from "react-native";

// Define supported text variants
type Variant = "h1" | "h2" | "body" | "caption" | "button";

// Props
interface Props extends RNTextProps {
  variant?: Variant;
  color?: keyof typeof lightTheme.colors;
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

export default function Text({
  variant = "body",
  color = "text",
  children,
  style,
  ...rest
}: Props) {
  const { theme } = useTheme();

  // Variant styles from theme.typography
  const variantStyle = {
    h1: theme.typography.heading1,
    h2: theme.typography.heading2,
    body: theme.typography.body,
    caption: theme.typography.caption,
    button: {
      ...theme.typography.button,
      textTransform: "uppercase" as const,
    },
  }[variant];

  return (
    <RNText
      style={[
        variantStyle,
        { color: theme.colors[color] || theme.colors.text },
        style,
      ]}
      {...rest}
    >
      {children}
    </RNText>
  );
}

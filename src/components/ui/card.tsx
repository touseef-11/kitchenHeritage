// src/components/ui/Card.tsx
import { useTheme } from "@/src/context/theme-context";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Button from "./button";

interface CardProps {
  image: string;
  title: string;
  description?: string;
  price?: string;
  showButton?: boolean;
  onPress?: () => void;
}

export default function Card({
  image,
  title,
  description,
  price,
  showButton,
  onPress,
}: CardProps) {
  const { theme } = useTheme();

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: theme.colors.surface,
          borderRadius: theme.radius.lg,
          padding: theme.spacing.md,
          ...theme.shadows.md,
        },
      ]}
    >
      <Image
        source={{ uri: image }}
        style={{
          width: "100%",
          height: 150,
          borderRadius: theme.radius.md,
          marginBottom: theme.spacing.sm,
        }}
        resizeMode="cover"
      />

      <Text style={[styles.title, { color: theme.colors.text }]}>{title}</Text>

      {description && (
        <Text style={[styles.description, { color: theme.colors.text }]}>
          {description}
        </Text>
      )}

      {price && (
        <Text style={[styles.price, { color: theme.colors.primary }]}>
          {price}
        </Text>
      )}

      {showButton && onPress && (
        <View style={{ marginTop: theme.spacing.sm }}>
          <Button title="Order Now" onPress={onPress} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
  },
  description: {
    fontSize: 14,
    marginTop: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 6,
  },
});

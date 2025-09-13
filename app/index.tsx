// app/splash.tsx
import Button from "@/src/components/ui/button";
import Text from "@/src/components/ui/tesxt";
import { useTheme } from "@/src/context/theme-context";
import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, View } from "react-native";

export default function SplashScreen() {
  const { theme } = useTheme();
  const router = useRouter();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      {/* Logo / Image */}
      <Image
        source={require("@/assets/images/logo.png")}
        style={{ width: 150, height: 150, marginBottom: 10 }}
        resizeMode="contain"
      />

      {/* Welcome text */}
      <Text variant="h2" style={{ textAlign: "center" }}>
        Welcome to Heritage Kitchen
      </Text>
      <Text
        variant="body"
        color="textSecondary"
        style={{ textAlign: "center", marginBottom: 40 }}
      >
        Delicious food delivered at your doorstep.
      </Text>

      {/* CTA button */}
      <Button
        title="Get Started"
        onPress={() => router.replace("/(tabs)/home")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});

import React from "react";
import { PaperProvider, Portal } from "react-native-paper";
// Replace react-native StatusBar with expo-status-bar
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PaperProvider>
        <Portal>
        {/* We use a Stack at the root to allow for modals or login screens later */}
        <Stack screenOptions={{ headerShown: false }} />
        </Portal>
      </PaperProvider>
    </GestureHandlerRootView>
  );
}

import React from "react";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";

export default function RootLayout() {
  return (
    <>
      <Slot />
      <StatusBar style="auto" />
    </>
  );
}

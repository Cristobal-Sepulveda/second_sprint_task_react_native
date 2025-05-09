import React from "react";
import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "../src/store/store";

function RootLayout() {
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="login/index" options={{ headerShown: false }} />
        <Stack.Screen name="register/index" options={{ headerShown: false }} />
      </Stack>
    </Provider>
  );
}

export default RootLayout;

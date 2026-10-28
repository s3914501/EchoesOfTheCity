import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { AnimatedIcon } from "@/components/animated-icon";

export default function RootLayout() {
  return (
    <ThemeProvider value={DarkTheme}>
      <StatusBar style="light" backgroundColor="#000000" />

      <Stack
        initialRouteName="login"
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: "#000000",
          },
        }}
      >
        <Stack.Screen
          name="login"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="question"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="home"
          options={{
            headerShown: false,
            animation: "none",
          }}
        />

        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="explore"
          options={{
            headerShown: false,
            animation: "none",
          }}
        />

        <Stack.Screen
          name="map"
          options={{
            headerShown: false,
            animation: "none",
          }}
        />

        <Stack.Screen
          name="profile"
          options={{
            headerShown: false,
            animation: "none",
          }}
        />

        <Stack.Screen
          name="observer"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="city-explorer"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="story-collector"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="urban-builder"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="culture-collector"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="cardigan"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="cardigan-event"
          options={{
            headerShown: false,
          }}
        />
      </Stack>

      <AnimatedIcon />
    </ThemeProvider>
  );
}

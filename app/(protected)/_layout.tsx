import React from "react";
import { Redirect, Stack } from "expo-router";
import { TrackProvider } from "@/contexts/track-context";
import { useAuth } from "@/hooks/use-auth";
import UserProvider from "@/contexts/user-context";

export default function Layout() {
  const { user } = useAuth();

  if (!user) {
    return <Redirect href={"/sign-in"} />;
  }

  return (
    <UserProvider>
      <TrackProvider>
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: "#09090b",
            },
            headerTintColor: "#F5F8FA",
            headerTitleStyle: {
              color: "#F5F8FA",
            },
          }}
        >
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="onboarding" options={{ headerShown: false }} />
        </Stack>
      </TrackProvider>
    </UserProvider>
  );
}

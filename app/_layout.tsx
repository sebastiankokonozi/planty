import { SplashScreen, Stack } from "expo-router";

export default function Layout() {
  SplashScreen.preventAutoHideAsync();
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false, animation: "fade" }}
      />
      <Stack.Screen
        name="onboarding"
        options={{
          presentation: "modal",
          headerShown: false,
          animation: "fade",
        }}
      />
      <Stack.Screen
        name="new"
        options={{
          presentation: "modal",
          title: "New plant",
        }}
      />
    </Stack>
  );
}

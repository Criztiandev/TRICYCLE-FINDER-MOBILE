import { Slot, Stack } from "expo-router";
import "react-native-reanimated";
import { lightTheme } from "@/common/constant/light.theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useAppState } from "@/common/hooks/query/useAppState";
import useLoadFont from "@/common/hooks/query/useLoadFont";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { createNotifications } from "react-native-notificated";
import { ThemeProvider } from "@/providers/ThemeProvider";
import AuthProvider from "@/providers/AuthProvider";
import Toast from "react-native-toast-message";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import "../../global.css";

const client = new QueryClient();

export default function RootLayout() {
  const { NotificationsProvider } = createNotifications();

  // font
  useLoadFont();

  // States
  useAppState();

  return (
    <QueryClientProvider client={client}>
      <ThemeProvider initialTheme={lightTheme}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <AuthProvider>
            <BottomSheetModalProvider>
              <NotificationsProvider>
                <>
                  <Stack screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="auth" />
                    <Stack.Screen name="user" />
                    <Stack.Screen name="rider" />
                    <Stack.Screen name="account" />
                    <Stack.Screen name="booking" />
                  </Stack>
                  <Toast />
                </>
              </NotificationsProvider>
            </BottomSheetModalProvider>
          </AuthProvider>
        </GestureHandlerRootView>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

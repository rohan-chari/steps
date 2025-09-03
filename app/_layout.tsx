import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { 
  useFonts, 
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_600SemiBold,
  Rubik_700Bold
} from "@expo-google-fonts/rubik";
import { View, ActivityIndicator } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";

function LayoutWithInset() {
  const insets = useSafeAreaInsets();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* Paint only the status bar inset */}
      <View
  style={{
    height: insets.top,
    backgroundColor: "#3cb98fff",
    borderBottomWidth: 7,
    borderBottomColor: "rgba(0, 0, 0, 0.17)",
  }}
/>
      
      {/* Main content */}
      <View style={{ flex: 1, backgroundColor: "#F5F1EA" }}>
        <StatusBar style="light" backgroundColor="#3cb98f" />
        <Stack screenOptions={{ headerShown: false }} />
      </View>
    </GestureHandlerRootView>
  );
}

export default function RootLayout() {
  const [loaded] = useFonts({ 
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_700Bold
  });

  if (!loaded) {
    return (
      <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
        <ActivityIndicator/>
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <LayoutWithInset />
    </SafeAreaProvider>
  );
}

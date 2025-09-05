import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { 
  useFonts, 
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_600SemiBold,
  Rubik_700Bold
} from "@expo-google-fonts/rubik";
import { View, ActivityIndicator, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";

function LayoutWithInset() {
  const insets = useSafeAreaInsets();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "#F9FAFB" }}>
        <StatusBar style="dark" />
        <Stack 
          screenOptions={{ 
            headerShown: false,
            animation: 'fade',
            animationDuration: 100,
          }} 
        />
        
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

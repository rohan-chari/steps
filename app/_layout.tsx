import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useFonts, Manrope_700Bold, Manrope_600SemiBold } from "@expo-google-fonts/manrope";
import { Inter_400Regular } from "@expo-google-fonts/inter";
import { View, ActivityIndicator } from "react-native";

export default function RootLayout() {
  const [loaded] = useFonts({ Manrope_700Bold, Manrope_600SemiBold, Inter_400Regular });
  if (!loaded) return <View style={{flex:1,alignItems:"center",justifyContent:"center"}}><ActivityIndicator/></View>;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack screenOptions={{ headerShown: false }} />
    </GestureHandlerRootView>           
  );
}

import { Stack, router } from "expo-router";

import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";


export default function SellingFlow() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="form" options={{ headerTitle: "Sell" }} />
      <Stack.Screen
        name="step2"
        options={{ headerTitle: "Sell", headerBackVisible: false }}
      />
      <Stack.Screen
        name="step3"
        options={{ headerTitle: "Sell", headerBackVisible: false }}
      />
      <Stack.Screen
        name="final"
        options={{
          headerTitle: "Schedule Confirmed",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                router.push("/customers/selling");
              }}
            >
              <AntDesign name="arrowleft" size={24} color="black" style={{marginRight:10}} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
}

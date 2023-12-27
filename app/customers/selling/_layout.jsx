import { Stack } from "expo-router";

export default function SellingFlow() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="form" options={{headerTitle:"Sell"}}/>
    </Stack>
  );
}

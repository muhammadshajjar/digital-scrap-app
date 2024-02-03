import { Stack } from "expo-router";

export default function SchedulesFlow() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="allschedules" options={{headerTitle:"All Schedules"}}/>
      <Stack.Screen name="map" options={{headerTitle:"Map"}}/>
    </Stack>
  );
}
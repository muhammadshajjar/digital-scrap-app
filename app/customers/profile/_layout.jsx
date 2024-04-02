import { Stack } from "expo-router/stack";

const ProfileLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="schedules" options={{ headerTitle: "Schedules" }} />
      <Stack.Screen
        name="smarttrashbin"
        options={{ headerTitle: "Smart Trashbin" }}
      />
      <Stack.Screen name="account" options={{ headerTitle: "Account" }} />
      <Stack.Screen name="blogs" options={{ headerTitle: "Blogs" }} />
      <Stack.Screen
        name="blogsdetails"
        options={{ headerTitle: "Blog Detail" }}
      />
      <Stack.Screen
        name="helpcenter"
        options={{ headerTitle: "Help Center" }}
      />
    </Stack>
  );
};
export default ProfileLayout;

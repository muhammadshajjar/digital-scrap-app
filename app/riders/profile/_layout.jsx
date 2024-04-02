import { Stack } from "expo-router/stack";

const ProfileLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="schedules" options={{ headerTitle: "Schedules" }} />
      <Stack.Screen name="blogs" options={{ headerTitle: "Blogs" }} />
      <Stack.Screen
        name="blogsdetails"
        options={{ headerTitle: "Blog Details" }}
      />
      <Stack.Screen
        name="smarttrashbin"
        options={{ headerTitle: "Smart Trashbin" }}
      />
      <Stack.Screen name="account" options={{ headerTitle: "Account" }} />

      {/* rider online verfication  */}

      <Stack.Screen
        name="verification"
        options={{ headerTitle: "Online Verfication" }}
      />
      <Stack.Screen name="basicinfo" options={{ headerTitle: "Basic Info" }} />
      <Stack.Screen name="cnic" options={{ headerTitle: "CNIC" }} />
      <Stack.Screen
        name="idverification"
        options={{ headerTitle: "ID Verfication" }}
      />
      <Stack.Screen
        name="driverlicense"
        options={{ headerTitle: "Driver license" }}
      />
      <Stack.Screen
        name="vehicalinfo"
        options={{ headerTitle: "Vehical info" }}
      />
      <Stack.Screen
        name="helpcenter"
        options={{ headerTitle: "Help Center" }}
      />
    </Stack>
  );
};
export default ProfileLayout;

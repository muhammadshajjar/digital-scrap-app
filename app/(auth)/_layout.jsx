import { Stack } from "expo-router/stack";

const AuthLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
};

export default AuthLayout;

import { useEffect } from "react";
// import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useColorScheme } from "react-native";

import { AuthProvider } from "../context/auth-context";

// import {
//   useQuery,
//   useMutation,
//   useQueryClient,
//   QueryClient,
//   QueryClientProvider,
// } from "react-query";
// import { useAuthUser } from "@react-query-firebase/auth";

// import { auth } from "../lib/firebase/config";

// import { router } from "expo-router";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(auth)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // const { user } = useAuth();
  // Create a client
  // const queryClient = new QueryClient();

  const [loaded, error] = useFonts({
    "Montserrat-Bold": require("../assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-SemiBold": require("../assets/fonts/Montserrat-SemiBold.ttf"),
    "Montserrat-Regular": require("../assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-ExtraBold": require("../assets/fonts/Montserrat-ExtraBold.ttf"),
    "Montserrat-Light": require("../assets/fonts/Montserrat-Light.ttf"),
    "Montserrat-Medium": require("../assets/fonts/Montserrat-Medium.ttf"),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
      console.log("App Loaded.");

      // if (user) {
      //   router.push("/customers");
      // } else {
      //   router.push("/");
      // }
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    // <QueryClientProvider client={queryClient} contextSharing={true}>

    // </QueryClientProvider>
    <RootLayoutNav />
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  // const user = useAuthUser(["user"], auth);

  // useEffect(()=>{
  //   if(user){
  //     router.push("/customers/selling");
  //   }else{
  //     router.push("/");
  //   }
  // },[user])

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <AuthProvider>
        <Stack>
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="customers" options={{ headerShown: false }} />
          <Stack.Screen
            name="cartmodal"
            options={{
              presentation: "modal",
              headerTitle: "Your Cart",
            }}
          />
        </Stack>
      </AuthProvider>
    </ThemeProvider>
  );
}

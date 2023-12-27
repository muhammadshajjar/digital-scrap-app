import { Tabs } from "expo-router/tabs";
import {
  View,
  Platform,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";


const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity style={styles.customButtonContainer} onPress={onPress}>
    <View style={styles.customButton}>{children}</View>
  </TouchableOpacity>
);


 const CustomerFlowLayout=()=> {
  return (
    <Tabs
      screenOptions={({ route, navigation }) => {
        const state = navigation.getState();
        const hasNestedNavigation = state.routes[state.index].state?.index > 0; //  if the current state's route has a state, and its not the index of that route, then we've detected nested navigation
        navigation;
        return {
          tabBarStyle: {
            display: hasNestedNavigation ? "none" : "flex", // hide for all nested navigation screens
            position: "absolute",
            backgroundColor: "#ffffff",
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            height: 80,
            shadowColor: "#42A554",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.39,
            shadowRadius: 8.3,
            elevation: 13,
          },
          headerShown: false,
          tabBarShowLabel: false,
        };
      }}
    >
      <Tabs.Screen
        name="selling"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarButtonIcon}>
              <Ionicons
                name="home-outline"
                size={28}
                color={focused ? "#42A554" : "#9DB2CE"}
              />
              {focused && <Text style={styles.label}>Home</Text>}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="news"
        options={{
          tabBarLabel: "News",
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarButtonIcon}>
              <Ionicons
                name="ios-newspaper-outline"
                size={28}
                color={focused ? "#42A554" : "#9DB2CE"}
              />
              {focused && <Text style={styles.label}>News</Text>}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="marketplace"
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="storefront" size={35} color="#fff" />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          tabBarLabel: "Chat",
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarButtonIcon}>
              <Ionicons
                name="ios-chatbubble-outline"
                size={28}
                color={focused ? "#42A554" : "#9DB2CE"}
              />
              {focused && <Text style={styles.label}>Chat</Text>}
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ focused }) => (
            <View
              style={styles.tabBarButtonIcon}
            >
              <Ionicons
                name="ios-person-outline"
                size={28}
                color={focused ? "#42A554" : "#9DB2CE"}
              />
              {focused && <Text style={styles.label}>Profile</Text>}
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
export default CustomerFlowLayout;

const styles = StyleSheet.create({
  tabBarButtonIcon: {
    alignItems: "center",
    justifyContent: "center",
    top: Platform.OS === "ios" && 12,
  },
  customButtonContainer: {
    top: -20,
    justifyContent: "center",
    alignItems: "center",
  },
  customButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#42A554",
    shadowColor: "#42a554",
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20.0,
    elevation: 24,
  },
  label: {
    fontSize: 12,
    fontWeight: "500",
    color: "#42A554",
  },
});

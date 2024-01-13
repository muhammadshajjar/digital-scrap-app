import {
  createMaterialTopTabNavigator,
} from "@react-navigation/material-top-tabs";

import {  withLayoutContext } from "expo-router";
const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext(Navigator);


const MarketplaceTabs = () => {
  return (
    <MaterialTopTabs
      screenOptions={{
        tabBarStyle: { backgroundColor: "#42A554" },
        tabBarLabelStyle: {
          fontSize: 18,
          textTransform: "capitalize",
          color: "white",
          fontFamily: "Montserrat-SemiBold",
          marginTop: 10,
        },
        tabBarIndicatorStyle: { backgroundColor: "white", height: 5 },
      }}
    >
      <MaterialTopTabs.Screen
        name="index"
        options={{
          title: "Scrap",
        }}
      />
      <MaterialTopTabs.Screen
        name="antique"
        options={{
          title: "Antique",
        }}
      />
    </MaterialTopTabs>
  );
};

export default MarketplaceTabs;

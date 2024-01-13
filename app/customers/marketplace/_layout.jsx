import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";

import { Stack } from "expo-router/stack";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { COLORS } from "./../../../constants/Colors";

import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { router } from "expo-router";

const CustomHeader = ({  setSearchText }) => {
  const handleSearch = () => {
    console.log("Searching...");
  };

  const handleIconPress = () => {
    router.push("cartmodal");
  };

  return (
    <SafeAreaView
      edges={["top"]}
      style={{ backgroundColor: COLORS.primaryGreen }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 15,
          backgroundColor: COLORS.primaryGreen,
          gap:12
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "white",
            paddingHorizontal: 15,
            paddingVertical: 10,
            borderRadius: 35,
          }}
        >
          <Ionicons name="search-outline" size={28} color="gray" />
          <TextInput
            style={{
              height: 40,
              paddingHorizontal: 10,
              fontFamily:"Montserrat-Regular",
              fontSize:17
            }}
            placeholder="What are you looking for?"
            onChangeText={(text) => setSearchText(text)}
          />
        </View>

        <TouchableOpacity onPress={handleIconPress} style={{ marginLeft: 10 }}>
          <FontAwesome5 name="shopping-bag" size={38} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>

  );
};

const Layout = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <Stack
      screenOptions={{
        header: ({ navigation }) => (
          <CustomHeader navigation={navigation} setSearchText={setSearchText} />
        ),
      }}
    >
      <Stack.Screen name="(tabs)" initialParams={{ searchText }} />
      <Stack.Screen
        name="[id]"
        options={{ headerTitle: "Listing Details", headerShown: false }}
      />
    </Stack>
  );
};

export default Layout;

const styles = StyleSheet.create({});

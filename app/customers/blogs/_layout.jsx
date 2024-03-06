import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { Stack } from "expo-router";
import { COLORS } from "../../../constants/Colors";

const BlogsLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primaryGreen,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
          fontFamily:"Montserrat-Bold",
        },
      }}
    >
      <Stack.Screen name="index" options={{ headerTitle: "Blogs" }} />
      <Stack.Screen name="[id]" options={{ headerTitle: "Blog Details" }} />
    </Stack>
  );
};

export default BlogsLayout;

const styles = StyleSheet.create({});

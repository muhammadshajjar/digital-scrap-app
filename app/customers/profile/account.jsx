import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";

const Account = () => {
  const logoutUserHandler = () => {
    router.push("/login");
  };
  return (
    <View>
      <Text>Account</Text>

      <Pressable onPress={logoutUserHandler}>
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({});

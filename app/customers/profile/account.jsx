import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

import { Link } from "expo-router";

import { useAuthSignOut } from "@react-query-firebase/auth";

import { auth } from "../../../lib/firebase/config";
import { router } from "expo-router";

const Account = () => {
  const mutation = useAuthSignOut(auth);

  const logoutUserHandler = () => {
    console.log("logout user");
    mutation.mutate();
    router.push("/login");
  };
  return (
    <View>
      <Text>Account</Text>
      {/* <Link href="/login">Logout</Link> */}

      <Pressable onPress={logoutUserHandler}>
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({});

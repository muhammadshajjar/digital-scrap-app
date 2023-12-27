import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
  return (
    <SafeAreaView>
      <Link href="/customers/selling">Login!!!</Link>
      <Link href="/signup">Don't have an Account?</Link>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});

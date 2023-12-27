import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const SellingHome = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>This is the home page of my app!!</Text>
        <Link href="/customers/selling/form">Sell</Link>
      </View>
    </SafeAreaView>
  );
};

export default SellingHome;

const styles = StyleSheet.create({});

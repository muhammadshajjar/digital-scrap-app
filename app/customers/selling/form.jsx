import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

const SellingForm = () => {
  return (
    <View>
      <Text>start selling...</Text>
      <Link href={"/riders"}>Go to riders</Link>
    </View>
  );
};

export default SellingForm;

const styles = StyleSheet.create({});

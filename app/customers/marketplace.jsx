import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
const Marketplace = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Marketplace</Text>
        <Link href="/cartmodal">Present modal</Link>
      </View>
    </SafeAreaView>
  );
};

export default Marketplace;

const styles = StyleSheet.create({});

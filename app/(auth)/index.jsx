import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const Intro = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={{fontFamily:"Montserrat-Light",fontSize:30}}>Intro</Text>
        <Link href="/login">Explore Now</Link>
      </View>
    </SafeAreaView>
  );
};

export default Intro;

const styles = StyleSheet.create({});

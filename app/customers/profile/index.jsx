import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";


const ProfileHome = () => {


  return (
    <SafeAreaView>
      <View>
        <Text>Profile HOme</Text>
        <Link href="/customers/profile/schedules">Schedules</Link>
        <Link href="/customers/profile/smarttrashbin">Smart Trashbins</Link>
        <Link href="/customers/profile/helpcenter">Help Center</Link>
        <Link href="/customers/profile/account">Account</Link>
      </View>
    </SafeAreaView>
  );
};

export default ProfileHome;

const styles = StyleSheet.create({});

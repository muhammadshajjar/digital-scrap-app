import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";


import { useAuthUser } from "@react-query-firebase/auth";

import { auth } from "../../../lib/firebase/config";

const ProfileHome = () => {

  const user = useAuthUser(["user"], auth);
  console.log(user?.data?.email);

  return (
    <SafeAreaView>
      <View>
        <Text>Profile HOme, Welcom {user?.data?.email}</Text>
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

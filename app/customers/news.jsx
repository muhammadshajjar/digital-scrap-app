import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import { getAllBlogs } from "../../lib/firebase/firebase";

import { useAuthUser } from "@react-query-firebase/auth";

import { auth } from "../../lib/firebase/config";

const News = () => {

  const user = useAuthUser(["user"], auth);
  console.log(user?.data?.uid);

  // useEffect(() => {
  //   console.log("IN USE EFFECT");
  //   const result = testing();
  //   console.log(result)
  // }, []);

  // const testing = async () => {
  //   const result = await getAllBlogs();
  //   console.log(result);

  //   return result;
  // };

  return (
    <SafeAreaView>
      <View>
        <Text>News</Text>
      </View>
    </SafeAreaView>
  );
};

export default News;

const styles = StyleSheet.create({});

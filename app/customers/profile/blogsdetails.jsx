import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

import { Feather } from "@expo/vector-icons";

import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import Markdown from "react-native-markdown-display";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../../constants/Colors";


const BlogDetail = () => {
  const params = useLocalSearchParams();
  return (
    <SafeAreaView edges={["bottom"]} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.dateTxt}>Dec 13, 2023</Text>
        <Feather name="share" size={22} color={COLORS.primaryGrey} />
      </View>
      <Image source={{ uri: params?.picture }} style={styles.img} />
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.breifintro}>{params?.breifintro}</Text>
        <Markdown
          style={{
            body: { fontFamily:"Montserrat-Regular",lineHeight:21,fontSize:15 },
            heading3: { fontFamily:"Montserrat-SemiBold",fontSize:19 },
            code_block: { color: "black", fontSize: 14 },
          }}
        >
          {params?.content}
        </Markdown>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BlogDetail;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: "white",
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  dateTxt: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 17,
  },
  img: {
    height: "28%",
    borderRadius: 6,
  },
  content: {
    paddingVertical: 20,
    paddingHorizontal: 5,
  },
  breifintro: {
    fontSize: 16,
    fontFamily:"Montserrat-Regular",
  },
  markdownStyles: {
    fontSize: 20,
  },
});

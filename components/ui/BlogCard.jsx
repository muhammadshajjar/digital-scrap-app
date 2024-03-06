import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { Image } from "expo-image";
import { Link } from "expo-router";
import { COLORS } from "../../constants/Colors";

const BlogCard = ({ blogPost }) => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: blogPost?.thumbnail[0]?.url }}
        style={styles.img}
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          {blogPost?.title}
        </Text>
        <View style={styles.action}>
          <Text style={styles.dateTxt}>{blogPost?.postDate}</Text>
          <Link href="/customers/blogs/1" style={styles.readmoreTxt}>
            Read More
          </Link>
        </View>
      </View>
    </View>
  );
};

export default BlogCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    gap: 12,
    padding: 15,
    marginVertical: 10,
    shadowColor: "#1B1919",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  img: {
    height: 110,
    width: 110,
    borderRadius: 6,
  },
  content: {
    width: "67%",
  },
  title: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  dateTxt: {
    fontFamily: "Montserrat-Medium",
  },
  readmoreTxt: {
    fontFamily: "Montserrat-Medium",
    textDecorationLine: "underline",
    color: COLORS.primaryGreen,
    fontSize: 16,
  },
});

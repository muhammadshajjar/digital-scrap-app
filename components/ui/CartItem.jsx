import { StyleSheet, Text, View,TouchableOpacity } from "react-native";
import React from "react";

import { Image } from "expo-image";
import { COLORS } from "../../constants/Colors";
import { AntDesign } from "@expo/vector-icons";
const CartItem = () => {
  return (
    <View style={styles.card}>
      <Image
        style={styles.img}
        source={require("../../assets/images/anitiquekeys.png")}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Antique Keys</Text>
        <Text style={styles.conditionTxt}>
          condition
          <Text style={{ fontFamily: "Montserrat-SemiBold" }}>: 7/10</Text>
        </Text>
        <View style={styles.actionContainer}>
          <Text style={styles.price}>2,000</Text>
          <View style={styles.flexRow}>
            <TouchableOpacity style={styles.actionBtn}>
              <AntDesign name="plus" size={20} color="black" />
            </TouchableOpacity>
            <Text style={styles.quantityTxt}>2</Text>
            <TouchableOpacity style={styles.actionBtn}>
              <AntDesign name="minus" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  card: {
    borderRadius: 11,
    borderWidth: 1,
    borderColor: "#EAEAEA",
    backgroundColor: "#FFF",
    flexDirection: "row",
    alignContent: "center",
    padding: 12,
  },
  img: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  contentContainer: {
    padding: 10,
    flex: 1,
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
    gap:10,
  },
  title: {
    fontSize: 19,
    fontFamily: "Montserrat-Medium",
    marginBottom: 4,
  },
  price: {
    fontSize: 18,
    fontFamily: "Montserrat-Medium",
  },
  conditionTxt: {
    marginTop: 5,
    fontSize: 17,
    fontFamily: "Montserrat-Medium",
  },
  actionContainer: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  actionBtn: {
    backgroundColor: COLORS.lightGreyBg,
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 35,
  },
  quantityTxt: {
    fontSize: 18,
    fontFamily: "Montserrat-Semibold",
  }
});

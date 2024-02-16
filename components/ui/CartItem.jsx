import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

import { Image } from "expo-image";
import { COLORS } from "../../constants/Colors";
import { AntDesign } from "@expo/vector-icons";
const CartItem = ({
  itemData,
  onIncreaseCartQuantity,
  onDecreaseCartQuantity,
}) => {
  const productData = itemData?.product;
  return (
    <View style={styles.card}>
      <Image
        style={styles.img}
        source={{ uri: productData?.pictures[0].url }}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{productData?.title}</Text>
        <Text style={styles.conditionTxt}>
          condition
          <Text style={{ fontFamily: "Montserrat-SemiBold" }}>
            : {productData?.condition}/10
          </Text>
        </Text>
        <View style={styles.actionContainer}>
          <Text style={styles.price}>
            {productData?.price.toLocaleString()}
          </Text>
          <View style={styles.flexRow}>
            <TouchableOpacity
              style={styles.actionBtn}
              onPress={() => onIncreaseCartQuantity(itemData?.productId)}
            >
              <AntDesign name="plus" size={18} color="black" />
            </TouchableOpacity>
            <Text style={styles.quantityTxt}>{itemData?.quantity}</Text>
            <TouchableOpacity
              style={styles.actionBtn}
              onPress={() => onDecreaseCartQuantity(itemData?.productId)}
            >
              <AntDesign name="minus" size={18} color="black" />
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
    width: 110,
    height: 110,
    borderRadius: 10,
  },
  contentContainer: {
    padding: 10,
    flex: 1,
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  title: {
    fontSize: 18,
    fontFamily: "Montserrat-Medium",
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    fontFamily: "Montserrat-Medium",
  },
  conditionTxt: {
    marginTop: 5,
    fontSize: 16,
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
    height: 28,
    width: 28,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 35,
  },
  quantityTxt: {
    fontSize: 16,
    fontFamily: "Montserrat-SemiBold",
  },
});

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LottieView from "lottie-react-native";
import { COLORS } from "../../../constants/Colors";
import { router } from "expo-router";

const Checkout = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primaryBg }}>
      <View style={{ height: "70%" }}>
        <LottieView
          source={require("../../../assets/lottie/orderplaced.json")}
          autoPlay
          loop
          style={{ height: "100%", width: "100%" }}
        />
      </View>
      <TouchableOpacity onPress={() => router.back()} style={styles.btn}>
        <Text style={styles.btnText}>Continue Shopping :)</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  customerHeader: {
    height: 200,
    width: "100%",
    backgroundColor: COLORS.primaryGreen,
  },
  btn: {
    backgroundColor: COLORS.primaryGreen,
    width: "70%",
    paddingVertical: 15,
    borderRadius: 50,
    marginLeft: "auto",
    marginRight: "auto",
  },
  btnText: {
    color: "white",
    fontFamily: "Montserrat-SemiBold",
    fontSize: 16,
    textAlign: "center",
  },
});

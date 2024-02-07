import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../../constants/Colors";

import LottieView from "lottie-react-native";

const FinalStep = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your scrap got schedule Successfully!</Text>

      <View style={{ height: 300 }}>
        <LottieView
          source={require("../../../assets/lottie/done.json")}
          autoPlay
          loop
          style={{ height: "100%", width: "100%" }}
        />
      </View>
      <View>
        <Text style={styles.descTxt}>
          💰 You're making a positive impact, and your scrap is valued at{" "}
          <Text style={styles.priceTxt}>Rs 700! </Text>🌿
        </Text>
      </View>

      <View style={styles.noteContainer}>
        <Text style={styles.noteTitle}>Note:</Text>
        <Text style={styles.noteTxt}>
          The calculation we've provided is an initial estimate based on the
          category of scrap and the details you've provided. The final payment
          will be determined after our rider physically checks your scrap
          materials.
        </Text>
      </View>
    </View>
  );
};

export default FinalStep;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
  },
  title: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 22,
    textAlign: "center",
    marginVertical: 10,
    lineHeight:30
  },
  descTxt: {
    fontSize: 17,
    fontFamily: "Montserrat-Medium",
    maxWidth: "80%",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginVertical: 10,
  },
  noteContainer: {
    backgroundColor: "#DDF8E2",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  noteTitle: {
    fontFamily: "Montserrat-Medium",
    fontSize: 17,
  },
  noteTxt: {
    fontFamily: "Montserrat-Regular",
    lineHeight: 20,
    fontSize: 13,
    marginBottom: 6,
  },
  priceTxt:{
    color:COLORS.primaryGreen,
  }
});

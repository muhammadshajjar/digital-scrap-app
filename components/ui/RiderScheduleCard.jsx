import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../../constants/Colors";

const RiderScheduleCard = ({ data ,settings}) => {
  const acceptBtnHandler = () => {
    console.log("acceptBtnHandler");
  };
  const requestBtnHandler = () => {
    console.log("requestBtnHandler");
  };

  return (
    <View style={styles.card}>
      <View style={styles.flexRow}>
        <Text style={styles.title}>Pickup ID:</Text>
        <Text style={styles.desc}>{data?.id}</Text>
      </View>
      <View style={styles.flexBetween}>
        <View style={styles.flexRow}>
          <Text style={styles.title}>By:</Text>
          <Text style={styles.desc}>{data?.by}</Text>
        </View>
        <View style={styles.flexRow}>
          <Text style={styles.title}>At:</Text>
          <Text style={styles.desc}>{data?.at}</Text>
        </View>
      </View>
      <Text style={styles.addressTxt}>
      {data?.address}
      </Text>
      {settings && (
        <View style={styles.actions}>
          <TouchableOpacity
            style={styles.requestBtn}
            onPress={requestBtnHandler}
          >
            <Text style={styles.requestBtnTxt}>Request</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.acceptBtn} onPress={acceptBtnHandler}>
            <Text style={styles.acceptBtnTxt}>Accept</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default RiderScheduleCard;

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#1B1919",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.13,
    shadowRadius: 4,
    // For Android
    elevation: 3,
    marginBottom: 18,
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  flexBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  title: {
    fontSize: 17,
    fontFamily: "Montserrat-Bold",
    marginRight: 8,
  },
  desc: {
    fontFamily: "Montserrat-Regular",
    fontSize: 17,
  },
  addressTxt: {
    fontFamily: "Montserrat-Regular",
    fontSize: 17,
  },
  actions: {
    flexDirection: "row",
    alignSelf: "flex-end",
    alignItems: "center",
    marginVertical: 10,
  },
  requestBtnTxt: {
    color: COLORS.primaryGreen,
    textDecorationLine: "underline",
    fontFamily: "Montserrat-Medium",
    fontSize: 17,
  },
  acceptBtn: {
    borderRadius: 5,
    backgroundColor: COLORS.primaryGreen,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginLeft: 10,
  },
  acceptBtnTxt: {
    color: "white",
    fontFamily: "Montserrat-Medium",
    fontSize: 17,
  },
});

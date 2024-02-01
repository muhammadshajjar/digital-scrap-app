import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants/Colors";

const ScheduleCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.detailRow}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Pickup ID:</Text>
        </View>
        <Text style={styles.txt}>adkj2kfdf23311</Text>
      </View>
      <View style={styles.detailRow}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Date/Time:</Text>
        </View>
        <Text style={styles.txt}>5/1/2023 - 12:00 am</Text>
      </View>
      <View style={styles.detailRow}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Status:</Text>
        </View>
        <Text style={styles.txt}>Pending</Text>
      </View>
      <View style={styles.detailRow}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Rider Request:</Text>
        </View>
        <Text style={styles.txt}>Open</Text>
      </View>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => console.log("Trakcing...")}
      >
        <Text style={styles.buttonText}>Track Pickup</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ScheduleCard;

const styles = StyleSheet.create({
  card: {
    padding: 18,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#1B1919",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.13,
    shadowRadius: 4,
    // For Android
    elevation: 3,
  },
  titleContainer: {
    width: 140,
  },
  detailRow: {
    flexDirection: "row",
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontFamily: "Montserrat-Medium",
  },
  txt: {
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
  },
  buttonStyle: {
    alignSelf: "flex-end",
    paddingHorizontal: 15,
    paddingVertical: 12,
    backgroundColor: COLORS.primaryGreen,
    borderRadius: 10,
    marginTop:8,
  },
  buttonText: {
    fontFamily: "Montserrat-Medium",
    fontSize: 17,
    color: "#fff",
  },
});

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { COLORS } from "../../constants/Colors";

const TrashbinCard = () => {
  return (
    <View style={styles.card}>
      <Image
        source={require("../../assets/images/trashbin.png")}
        style={styles.img}
      />
      <View style={styles.detailRow}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Trashbin ID:</Text>
        </View>
        <Text style={styles.txt}>adkj2kfdf23311</Text>
      </View>
      <View style={styles.detailRow}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Fill level:</Text>
        </View>
        <Text style={styles.txt}>80%</Text>
      </View>
      <View style={styles.detailRow}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Weight:</Text>
        </View>
        <Text style={styles.txt}>2KG</Text>
      </View>
      <View style={styles.detailRow}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Schedule status:</Text>
        </View>
        <Text style={styles.txt}>Pending</Text>
      </View>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => console.log("Trakcing...")}
      >
        <Text style={styles.buttonText}>Set Pickup</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TrashbinCard;

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
  img: {
    height: 120,
    width: 150,
    marginLeft: "auto",
    marginRight: "auto",
    marginVertical: 20,
  },
  titleContainer: {
    width: 160,
  },
  detailRow: {
    flexDirection: "row",
    marginBottom: 8,
    paddingHorizontal: 30,
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
    marginTop: 8,
  },
  buttonText: {
    fontFamily: "Montserrat-Medium",
    fontSize: 17,
    color: "#fff",
  },
});

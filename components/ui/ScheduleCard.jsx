import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { COLORS } from "../../constants/Colors";

const ScheduleCard = ({ data }) => {
  return (
    <View style={styles.card}>
      <View style={styles.detailRow}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Pickup ID:</Text>
        </View>
        <Text style={styles.txt}>{data?.pickUpId}</Text>
      </View>
      <View style={styles.detailRow}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Date/Time:</Text>
        </View>
        <Text style={styles.txt}> {`${data?.date} - ${data?.time}`}</Text>
      </View>
      <View style={styles.detailRow}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Status:</Text>
        </View>
        <Text style={styles.txt}>
          {data?.riderId ? "Scheduled" : "Pending"}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() =>
          Alert.alert(
            "Track Pickup Feature Coming Soon! ",
            "We're actively working on our track pickup feature to make your experience even better. Stay tuned for updates as we strive to enhance your journey! 🚀"
          )
        }
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
    marginBottom: 10,
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
    marginTop: 8,
  },
  buttonText: {
    fontFamily: "Montserrat-Medium",
    fontSize: 17,
    color: "#fff",
  },
});

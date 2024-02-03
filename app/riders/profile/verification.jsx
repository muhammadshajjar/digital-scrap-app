import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import { COLORS } from "../../../constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Verification = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <TouchableOpacity
          onPress={() => router.push("/riders/profile/basicinfo")}
          style={styles.action}
        >
          <View style={styles.flexRow}>
            <AntDesign
              name="checkcircle"
              size={24}
              color={COLORS.primaryGreen}
            />
            <Text style={styles.actionTxt}>Basic Info</Text>
          </View>
          <FontAwesome
            name="angle-right"
            size={24}
            color={COLORS.primaryGrey}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/riders/profile/cnic")}
          style={styles.action}
        >
          <View style={styles.flexRow}>
            <AntDesign
              name="checkcircle"
              size={24}
              color={COLORS.primaryGreen}
            />
            <Text style={styles.actionTxt}>CNIC</Text>
          </View>
          <FontAwesome
            name="angle-right"
            size={24}
            color={COLORS.primaryGrey}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/riders/profile/idverification")}
          style={styles.action}
        >
          <View style={styles.flexRow}>
            <AntDesign
              name="checkcircleo"
              size={24}
              color={COLORS.primaryGreen}
            />
            <Text style={styles.actionTxt}>ID confimation</Text>
          </View>

          <FontAwesome
            name="angle-right"
            size={24}
            color={COLORS.primaryGrey}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/riders/profile/driverlicense")}
          style={styles.action}
        >
          <View style={styles.flexRow}>
            <AntDesign
              name="checkcircleo"
              size={24}
              color={COLORS.primaryGreen}
            />
            <Text style={styles.actionTxt}>Driver license</Text>
          </View>
          <FontAwesome
            name="angle-right"
            size={24}
            color={COLORS.primaryGrey}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/riders/profile/vehicalinfo")}
          style={styles.action}
        >
          <View style={styles.flexRow}>
            <AntDesign
              name="checkcircleo"
              size={24}
              color={COLORS.primaryGreen}
            />
            <Text style={styles.actionTxt}>Vehical Info</Text>
          </View>
          <FontAwesome
            name="angle-right"
            size={24}
            color={COLORS.primaryGrey}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Verification;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: COLORS.primaryBg,
    flex: 1,
  },
  card: {
    backgroundColor: "white",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 3,
    borderRadius: 8,
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  action: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 18,
    borderBottomWidth: 0.8,
    borderBottomColor: COLORS.primaryGrey,
  },
  actionTxt: {
    fontFamily: "Montserrat-Medium",
    fontSize: 16,
    marginLeft: 10,
  },
});

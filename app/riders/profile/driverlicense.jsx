import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";

import PhotoCard from "../../../components/ui/PhotoCard";
import { COLORS } from "../../../constants/Colors";

import { router } from "expo-router";

const PHOTOPLACEHOLDER = require("../../../assets/images/driverlicenseplaceholder.png");
const Driverlicense = () => {
  const [driverLicense, setDriverLicense] = useState(null);
  const [licenseNumber, setLicenseNumber] = useState(null);

  const submitDataHanlder = () => {
    if (!driverLicense || !licenseNumber) {
      Alert.alert("Error", `Please fill all fields`);
      return;
    }
    router.back();
  };
  return (
    <View style={styles.container}>
      <PhotoCard
        title="Driver License (front side)"
        photo={driverLicense}
        onSetPhoto={setDriverLicense}
        PHOTOPLACEHOLDER={PHOTOPLACEHOLDER}
      />

      <View style={styles.formContainer}>
        <Text style={styles.labelTxt}>License number</Text>
        <View style={styles.fieldContainer}>
          <TextInput
            placeholder="xxxxxxxxxx"
            onChangeText={(text) => setLicenseNumber(text)}
            value={licenseNumber}
            style={styles.pickerField}
            keyboardType="numeric"
          />
        </View>
      </View>
      <TouchableOpacity onPress={submitDataHanlder} style={styles.doneBtn}>
        <Text style={styles.doneBtnTxt}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Driverlicense;

const styles = StyleSheet.create({
  container: {
    padding: 18,
    backgroundColor: COLORS.primaryBg,
    flex: 1,
  },
  formContainer: {
    backgroundColor: "white",
    shadowColor: "#1B1919",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.13,
    shadowRadius: 4,
    elevation: 3,
    borderRadius: 4,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginVertical: 10,
  },
  labelTxt: {
    fontFamily: "Montserrat-Medium",
    fontSize: 17,
    marginBottom: 12,
  },
  fieldContainer: {
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 6,
  },
  pickerField: {
    padding: 15,
    fontFamily: "Montserrat-Medium",
    fontSize: 16,
    borderRadius: 4,
  },
  doneBtn: {
    backgroundColor: COLORS.primaryGreen,
    width: "80%",
    paddingVertical: 15,
    borderRadius: 6,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 22,
    marginBottom: 50,
  },
  doneBtnTxt: {
    color: "white",
    fontFamily: "Montserrat-SemiBold",
    fontSize: 16,
    textAlign: "center",
  },
});

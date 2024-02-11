import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../../constants/Colors";
import PhotoCard from "../../../components/ui/PhotoCard";
import { router } from "expo-router";

const Cnic = () => {
  const [cnicFront, setCnicFront] = useState(null);
  const [cnicBack, setCnicBack] = useState(null);
  const [cnicnNumber, setCnicNumber] = useState(null);

  const cnicNumberInputHandler = (number) => {
    setCnicNumber(() => {
      if (number.length > 15) {
        Alert.alert("Invalid Format", "Cnic number must have 14 number");
      }
      if (number.length === 5 || number.length === 13) {
        return number + "-";
      } else return number;
    });
  };
  const submitDataHanlder = () => {
    if (!cnicFront || !cnicBack || !cnicnNumber) {
      Alert.alert("Error", `Please fill all fields`);
      return;
    }
    router.back();
  };
  return (
    <ScrollView style={styles.container}>
      <PhotoCard
        title="CNIC (front side)"
        photo={cnicFront}
        onSetPhoto={setCnicFront}
      />
      <PhotoCard
        title="CNIC (back side)"
        photo={cnicBack}
        onSetPhoto={setCnicBack}
      />
      <View style={styles.formContainer}>
        <Text style={styles.labelTxt}>CNIC number</Text>
        <View style={styles.fieldContainer}>
          <TextInput
            placeholder="xxxxx-xxxxxxx-x"
            onChangeText={cnicNumberInputHandler}
            value={cnicnNumber}
            style={styles.pickerField}
            keyboardType="numeric"
          />
        </View>
      </View>

      <TouchableOpacity onPress={submitDataHanlder} style={styles.doneBtn}>
        <Text style={styles.doneBtnTxt}>Done</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Cnic;

const styles = StyleSheet.create({
  container: {
    padding: 18,
    backgroundColor: COLORS.primaryBg,
    flex: 1,
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

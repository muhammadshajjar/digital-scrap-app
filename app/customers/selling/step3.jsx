import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useEffect } from "react";
import SellingFormSteps from "../../../components/ui/SellingFormSteps";

import { useIsFocused } from "@react-navigation/native";

import { useDispatch } from "react-redux";
import { changeProgress } from "../../../store/redux/sellingSlice";

import SellingFromStepsBtn from "../../../components/ui/SellingFormStepsBtn";
import { COLORS } from "../../../constants/Colors";
import { Entypo } from "@expo/vector-icons";

const Step3 = () => {
  const dispatch = useDispatch();

  const isFocused = useIsFocused();
  useEffect(() => {
    isFocused && dispatch(changeProgress(3));
  }, [isFocused]);

  
  return (
    <View style={styles.container}>
      <SellingFormSteps />

      <View style={styles.content}>
        <View style={styles.imgContainer}>
          <Entypo name="images" size={50} color={COLORS.lightGrey} />
        </View>
        <Pressable
          onPress={() => console.log("Upload btn is pressed")}
          style={styles.uploadBtn}
        >
          <Text style={styles.uploadBtnTxt}>Upload pictures</Text>
        </Pressable>
        <Text style={styles.orTxt}>OR</Text>
        <Pressable
          onPress={() => console.log("Camera btn is pressed")}
          style={styles.cameraBtn}
        >
          <Entypo name="camera" size={24} color="white" />
        </Pressable>
      </View>

      <SellingFromStepsBtn
        fPath="/customers/selling/final"
        bPath="/customers/selling/step2"
        forwIsShown={false}
        checkIsShown={true}
      />
    </View>
  );
};

export default Step3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  imgContainer: {
    height: 220,
    borderWidth: 1,
    borderColor: COLORS.lightGrey,
    borderRadius: 10,
    width: "80%",
    marginBottom: 12,
    justifyContent:"center",
    alignItems: "center",
  },
  uploadBtn: {
    backgroundColor: COLORS.primaryGreen,
    width: "70%",
    padding: 16,
    borderRadius: 7,
    marginVertical: 18,
  },
  uploadBtnTxt: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontFamily: "Montserrat-Medium",
  },
  orTxt: {
    fontSize: 20,
    fontFamily: "Montserrat-Medium",
  },
  cameraBtn: {
    backgroundColor: COLORS.primaryGreen,
    width: 55,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginVertical: 18,
  },
});

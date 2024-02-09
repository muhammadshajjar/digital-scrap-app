import { StyleSheet, Text, View, Pressable, Alert, Image } from "react-native";
import React, { useState, useEffect } from "react";
import SellingFormSteps from "../../../components/ui/SellingFormSteps";

import { useIsFocused } from "@react-navigation/native";

import { useDispatch } from "react-redux";
import { changeProgress } from "../../../store/redux/sellingSlice";

import SellingFromStepsBtn from "../../../components/ui/SellingFormStepsBtn";
import { COLORS } from "../../../constants/Colors";
import { Entypo } from "@expo/vector-icons";

import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";

const Step3 = () => {
  const [image, setImage] = useState(null);
  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();

  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  useEffect(() => {
    isFocused && dispatch(changeProgress(3));
  }, [isFocused]);


  const verifyPermission = async () => {
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }
    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insuficient permission",
        "You need to grant camera permissions to use the app."
      );
      return false;
    }
    return true;
  };

  const takePictureHandler = async () => {
    const hasPermission = await verifyPermission();

    if (!hasPermission) {
      return;
    }

    const result = await launchCameraAsync({
      allowsEditing: true,
      aspectRatio: [16, 9],
      quality: 0.5,
    });

    setImage(result?.assets[0].uri);
  };

  const chooseImageHandler = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    if (!result?.canceled) {
      setImage(result.assets[0].uri);
    }
  };


  const handleSubmit = () => {
    if (!image) {
      Alert.alert("Error","Please select or take picture of your scrap material to proceed");
      return false;
    } else {
      router.push("/customers/selling/final");
    }
  };
  return (
    <View style={styles.container}>
      <SellingFormSteps />

      <View style={styles.content}>
        <View style={styles.imgContainer}>
          {!image && (
            <Entypo name="images" size={50} color={COLORS.lightGrey} />
          )}
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: "90%", height: "90%" }}
            />
          )}
        </View>
        <Pressable onPress={chooseImageHandler} style={styles.uploadBtn}>
          <Text style={styles.uploadBtnTxt}>Upload pictures</Text>
        </Pressable>
        <Text style={styles.orTxt}>OR</Text>
        <Pressable onPress={takePictureHandler} style={styles.cameraBtn}>
          <Entypo name="camera" size={24} color="white" />
        </Pressable>
      </View>

      <SellingFromStepsBtn
        bPath="/customers/selling/step2"
        forwIsShown={false}
        checkIsShown={true}
        onSubmitCallback={handleSubmit}
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
    justifyContent: "center",
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

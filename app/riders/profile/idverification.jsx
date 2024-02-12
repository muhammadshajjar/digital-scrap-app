import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../../constants/Colors";
import { router } from "expo-router";

import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";

const PICTURETAKINGSTEPS = [
  "The photo should clearly show the face and your drivers license",
  "The photo must be taken in good light adn in good quality",
  "Photos in sunglasses or mask is not allowed",
];

const Idverification = () => {
  const [image, setImage] = useState(null);
  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();

  const submitDataHanlder = () => {
    router.back();
  };

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
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.imgContainer}>
          {!image && (
            <Image
              source={require("../../../assets/images/manholdingcardillustration.png")}
              style={{ height: "100%", width: "100%" }}
            />
          )}
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: "100%", height: "100%" }}
            />
          )}
        </View>

        <TouchableOpacity
          style={styles.addProfileBtn}
          onPress={takePictureHandler}
        >
          <Text style={styles.addProfileTxt}>Take Picture</Text>
        </TouchableOpacity>

        <Text style={styles.title}>
          Bring your driver’s license in front of you and take a photo as an
          example:
        </Text>

        <View style={styles.list}>
          {PICTURETAKINGSTEPS.map((item, index) => (
            <View key={index} style={styles.listItem}>
              <View style={styles.dot} />
              <Text style={styles.itemText}>{item}</Text>
            </View>
          ))}
        </View>
      </View>
      <TouchableOpacity onPress={submitDataHanlder} style={styles.doneBtn}>
        <Text style={styles.doneBtnTxt}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Idverification;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: COLORS.primaryBg,
    flex: 1,
  },
  card: {
    backgroundColor: "white",
    paddingVertical: 35,
    paddingHorizontal:20,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#1B1919",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.13,
    shadowRadius: 4,
    // For Android
    elevation: 3,
    marginVertical: 10,
  },
  imgContainer: {
    height: 200,
    width: 100,
  },
  title: {
    fontFamily: "Montserrat-Medium",
    marginVertical: 12,
  },
  list: {
    marginLeft: 24,
  },
  listItem: {
    flexDirection: "row",
    marginTop: 4,
  },
  itemText: {
    marginLeft: 6,
    fontFamily: "Montserrat-Medium-Italic",
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 4,
    backgroundColor: "black",
    marginRight: 10,
    alignSelf: "center",
  },
  addProfileBtn: {
    borderWidth: 1,
    borderColor: COLORS.primaryGreen,
    paddingVertical: 12,
    borderRadius: 30,
    marginTop: 20,
    width: 150,
  },
  addProfileTxt: {
    fontFamily: "Montserrat-Medium",
    color: COLORS.primaryGreen,
    textAlign: "center",
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

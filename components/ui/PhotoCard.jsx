import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";

import * as ImagePicker from "expo-image-picker";
import { COLORS } from "../../constants/Colors";
const PhotoCard = ({ title, photo, onSetPhoto, PHOTOPLACEHOLDER }) => {
  //   const [image, setImage] = useState(null);

  const chooseImageHandler = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });

    if (!result?.canceled) {
      onSetPhoto(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.card}>
      <Text style={styles.titleTxt}>{title}</Text>
      <View style={styles.imgContainer}>
        {!photo && (
          <Image source={PHOTOPLACEHOLDER} style={{ width: 130, height: 80 }} />
        )}
        {photo && (
          <Image source={{ uri: photo }} style={{ width: 130, height: 80 }} />
        )}
      </View>
      <TouchableOpacity
        onPress={chooseImageHandler}
        style={styles.addProfileBtn}
      >
        <Text style={styles.addProfileTxt}>Add Photo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PhotoCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 20,
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
  titleTxt: {
    fontFamily: "Montserrat-Medium",
    fontSize: 17,
    marginBottom: 20,
  },
  imgContainer: {
    backgroundColor: "black",
    height: 200,
    width: "90%",
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
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
});

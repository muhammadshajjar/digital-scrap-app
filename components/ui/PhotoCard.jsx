import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";

import * as ImagePicker from "expo-image-picker";
import { COLORS } from "../../constants/Colors";
import useFileUpload from "../../hooks/useFileUpload";
import { useSelector } from "react-redux";

const PhotoCard = ({ title, photo, onSetPhoto, PHOTOPLACEHOLDER }) => {
  const [pictureLoading, setPictureLoading] = useState(true);
  const { uploading, uploadProgress, uploadError, downloadURL, uploadFile } =
    useFileUpload();

  const currentUser = useSelector((state) => state.user.personalInfo);

  //When DownloadURL is ready set it

  useEffect(() => {
    if (downloadURL) {
      onSetPhoto(downloadURL);
    }
  }, [downloadURL]);

  const chooseImageHandler = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });

    if (!result?.canceled) {
      onSetPhoto(result.assets[0].uri);
      uploadFile(
        result.assets[0].uri,
        `/profiles/${currentUser?.uid}/${title.split(" ").join("-")}`
      );
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
          <Image
            source={{ uri: photo }}
            style={{ width: 130, height: 80 }}
            onLoad={() => setPictureLoading(false)}
          />
        )}
        {photo && pictureLoading && (
          <ActivityIndicator
            size="small"
            color={COLORS.primaryGreen}
            style={{ position: "absolute", left: 0, right: 0 }}
          />
        )}
      </View>
      {!uploading && (
        <TouchableOpacity
          onPress={chooseImageHandler}
          style={styles.addProfileBtn}
        >
          <Text style={styles.addProfileTxt}>Add Photo</Text>
        </TouchableOpacity>
      )}
      {uploading && (
        <View style={styles.progressBarContainer}>
          <ActivityIndicator size="small" color={COLORS.primaryGreen} />
        </View>
      )}
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
  progressBarContainer: {
    // Styles for the progress bar container
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
});

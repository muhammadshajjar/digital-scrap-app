import { StyleSheet, TouchableOpacity, View, Alert } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { COLORS } from "../../constants/Colors";

import { auth } from "../../lib/firebase/config";
import { useAuthSignInWithRedirect } from "@react-query-firebase/auth";

import { GoogleAuthProvider } from "firebase/auth";

const GoogleAuth = () => {
  const mutation = useAuthSignInWithRedirect(auth, {
    onError(error) {
      console.log("Error", error);
      Alert.alert(error.message);
    },
    onSuccess() {
      router.push("/customers/selling");
    },
  });
  const authWithGoogleHandler = () => {
    mutation.mutate({ provider: new GoogleAuthProvider() });
  };

  return (
    <View style={styles.container}>
      <View style={styles.horizontalLine} />
      <TouchableOpacity
        onPress={authWithGoogleHandler}
        style={styles.btnContainer}
      >
        <Image
          source={require("../../assets/images/Googlelogo.png")}
          placeholder="google logo"
          contentFit="contain"
          style={styles.img}
        ></Image>
      </TouchableOpacity>
      <View style={styles.horizontalLine} />
    </View>
  );
};

export default GoogleAuth;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
    gap: 20,
  },
  horizontalLine: {
    height: 1,
    backgroundColor: COLORS.lightGrey,
    flex: 2,
  },
  btnContainer: {
    height: 45,
    borderWidth: 1,
    borderColor: COLORS.lightGrey,
    paddingVertical: 7,
    paddingHorizontal: 25,
    borderRadius: 10,
    flex: 0.5,
  },
  img: {
    height: "100%",
    width: "100%",
  },
});

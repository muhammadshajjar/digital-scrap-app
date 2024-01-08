import { StyleSheet, TouchableOpacity, View, Alert, Text } from "react-native";
import React, { useState } from "react";
import { Image } from "expo-image";
import { COLORS } from "../../constants/Colors";
import { router } from "expo-router";

import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

GoogleSignin.configure({
  webClientId:
    "1018730329907-7d91lkguomqcpaggfn866ma1gnv5m0ki.apps.googleusercontent.com",
});

const GoogleAuth = () => {
  const [authenticating, setAuthenticating] = useState(false);

  const googleSigninHandler = async () => {
    setAuthenticating(true);
    try {
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });
      // Get the users ID token
      const { idToken } = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      const result = await auth().signInWithCredential(googleCredential);

      console.log(result);
      setAuthenticating(false);
      router.push("/customers");
    } catch (e) {
      console.error(e.message);
      Alert.alert(e.message);
      setAuthenticating(false);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.horizontalLine} />
        <TouchableOpacity
          onPress={googleSigninHandler}
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
      <Text style={{ textAlign: "center" ,marginTop:20}}>
        {authenticating && "Authenticating....."}
      </Text>
    </>
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

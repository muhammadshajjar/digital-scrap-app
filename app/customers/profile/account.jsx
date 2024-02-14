import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";

import { COLORS } from "../../../constants/Colors";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { router, Link } from "expo-router";
import auth from "@react-native-firebase/auth";
import { useSelector } from "react-redux";

const Account = () => {
  const currentUser = useSelector((state) => state.user.personalInfo);
  const logoutUserHandler = async () => {
    try {
      await auth().signOut();
      console.log("User signed out!");
      router.push("(auth)");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.profileImg}>
          <FontAwesome5 name="user-alt" size={24} color="white" />
        </View>
        <View>
          <Text style={styles.name}>{currentUser?.displayName}</Text>
          <Text style={styles.username}>{currentUser?.userName}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.settingList} onPress={logoutUserHandler}>
        <View style={styles.flexRow}>
          <AntDesign name="logout" size={24} color="red" />
          <Text style={styles.settingListTxt}>Logout</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 36,
    backgroundColor: COLORS.primaryBg,
    flex: 1,
  },
  profileContainer: {
    paddingHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginVertical: 30,
  },
  profileImg: {
    width: 55,
    height: 55,
    borderRadius: 50,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primaryGreen,
  },
  name: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 20,
    marginTop: 20,
    textAlign: "center",
  },
  username: {
    fontFamily: "Montserrat-Medium",
    fontSize: 16,
    textAlign: "center",
    marginTop: 6,
  },
  settingList: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  settingListTxt: {
    fontSize: 17,
    fontFamily: "Montserrat-Regular",
    marginLeft: 14,
    color: "red",
  },
  flexRow: {
    flexDirection: "row",
    marginLeft: 8,
    alignItems: "center",
  },
});

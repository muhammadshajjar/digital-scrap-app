import { View, Text, StyleSheet, Switch } from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../constants/Colors";
import { FontAwesome5 } from "@expo/vector-icons";
import { Link, router } from "expo-router";

const ProfileHeader = ({ mode }) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    console.log("toggleSwitch");

    if (mode === "rider") {
      router.push("/riders");
    }else{
      // router.back();
      router.push("/customers")
    }
    
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <View style={styles.profileImg}>
            <FontAwesome5
              name="user-alt"
              size={24}
              color={COLORS.primaryGreen}
            />
          </View>
          <View style={styles.profile}>
            <Text style={styles.profileTxt}>Talha Arshad</Text>
            <Text style={styles.profilePrice}>Balance: Rs. 400</Text>
          </View>
        </View>
      </View>
      <View style={styles.modeSwitch}>
        <Text style={styles.modeTxt}>Switch to {mode} mode</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#767577" }}
          thumbColor={isEnabled ? COLORS.primaryGreen : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primaryGreen,
    height: 180,
    justifyContent: "center",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  profileImg: {
    width: 55,
    height: 55,
    borderRadius: 50,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  profile: {
    marginLeft: 10,
  },
  profileTxt: {
    color: "white",
    fontSize: 18,
    fontFamily: "Montserrat-SemiBold",
  },
  profilePrice: {
    fontSize: 15,
    fontFamily: "Montserrat-Medium",
    color: "white",
  },
  modeSwitch: {
    backgroundColor: "#F5F7F8",
    width: "80%",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: -28,
    borderWidth: 1,
    borderColor: "#DDDDDD",
  },
  modeTxt: {
    fontSize: 17,
    fontFamily: "Montserrat-SemiBold",
  },
});

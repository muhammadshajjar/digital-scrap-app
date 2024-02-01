import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants/Colors";
import { AntDesign } from "@expo/vector-icons";

import { Link, router } from "expo-router";

const SettingCard = ({ settingData }) => {
  return (
    <TouchableOpacity
      style={styles.settingList}
      onPress={() => router.push(settingData?.linkPath)}
    >
      <View style={styles.flexRow}>
        {settingData?.icon}
        <Text style={styles.settingListTxt}>{settingData?.name}</Text>
      </View>
      <AntDesign name="arrowright" size={24} color={COLORS.lightGrey} />
    </TouchableOpacity>
  );
};

export default SettingCard;

const styles = StyleSheet.create({
  settingList: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderTopWidth:0.5,
    borderColor: COLORS.lightGrey,
  },
  settingListTxt: {
    fontSize: 17,
    fontFamily: "Montserrat-Regular",
    marginLeft:14
  },
  flexRow: {
    flexDirection: "row",
    marginLeft: 8,
    alignItems:"center",
  },
});

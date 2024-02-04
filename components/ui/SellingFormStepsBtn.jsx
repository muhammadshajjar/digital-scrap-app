import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../../constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";

const SellingFromStepsBtn = ({
  fPath,
  bPath,
  backIsShown = true,
  forwIsShown = true,
  checkIsShown = false,
  //   onGoNext = () => {},
  //   onDone,
}) => {
  //   const forwardHandler = () => {
  //     onGoNext();
  //     navigation.navigate(fPath);
  //   };

  return (
    <View style={styles.navContainer}>
      {backIsShown && (
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() => router.push(bPath)}
        >
          <AntDesign name="arrowleft" size={30} color="white" />
        </TouchableOpacity>
      )}
      {forwIsShown && (
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() => router.push(fPath)}
        >
          <AntDesign name="arrowright" size={30} color="white" />
        </TouchableOpacity>
      )}
      {checkIsShown && (
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() => router.push(fPath)}
        >
          <AntDesign name="check" size={30} color="white" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SellingFromStepsBtn;

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: "row",
    columnGap: 20,
    alignSelf: "flex-end",
    marginVertical: 20,
  },
  btnContainer: {
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primaryGreen,
    borderRadius: 50,
  },
});

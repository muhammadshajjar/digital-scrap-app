import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TrashbinCard from "../../../components/ui/TrashbinCard";
import { COLORS } from "../../../constants/Colors";


const SmartTrashBin = () => {
  return (
    <View style={styles.container}>
      <TrashbinCard />
    </View>
  );
};

export default SmartTrashBin;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 36,
    paddingHorizontal: 12,
    backgroundColor: COLORS.primaryBg,
    flex: 1,
  },
});

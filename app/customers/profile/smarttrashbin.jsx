import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TrashbinCard from "../../../components/ui/TrashbinCard";
import { COLORS } from "../../../constants/Colors";

const SmartTrashBin = () => {
  return (
    <View style={styles.container}>
      <TrashbinCard />
      <Text style={styles.feedBacktxt}>
        Smart Trash Bin feature is in the pipeline! Stay tuned for updates. 🗑️✨
      </Text>
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
  feedBacktxt: {
    textAlign: "center",
    marginVertical: 20,
    fontSize: 18,

  },
});

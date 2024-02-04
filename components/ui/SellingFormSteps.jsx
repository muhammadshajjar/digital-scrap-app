import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants/Colors";
import { useSelector } from "react-redux";

const SellingFormSteps = () => {
  const progress = useSelector((state) => state.selling.progress);
  const getStepColor = (step) => {
    if (step <= progress) {
      return { bg: COLORS.primaryGreen, color: "white" };
    } else {
      return { bg: COLORS.lightGreyBg, color: "black" };
    }
  };

  const renderSteps = () => {
    const steps = [];
    for (let i = 1; i <= 3; i++) {
      steps.push(
        <View
          key={i}
          style={[
            styles.stepContainer,
            {
              backgroundColor: getStepColor(i).bg,
            },
          ]}
        >
          <Text style={[styles.txt, { color: getStepColor(i).color }]}>
            {i}
          </Text>
        </View>
      );
      if (i < 3) {
        steps.push(
          <View
            key={`separator${i}`}
            style={[
              styles.stepsSeperator,
              {
                backgroundColor: getStepColor(i).bg,
              },
            ]}
          ></View>
        );
      }
    }
    return steps;
  };

  return <View style={styles.container}>{renderSteps()}</View>;
};

export default SellingFormSteps;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 13,
  },
  stepContainer: {
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  txt: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 17,
  },
  stepsSeperator: {
    width: "25%",
    height: 2,
    backgroundColor: COLORS.primaryGreen,
  },
});

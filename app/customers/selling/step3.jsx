import { StyleSheet, Text, View, Button } from "react-native";
import React, { useEffect, useState } from "react";
import SellingFormSteps from "../../../components/ui/SellingFormSteps";

import { useIsFocused } from "@react-navigation/native";

import { useDispatch } from "react-redux";
import { changeProgress } from "../../../store/redux/sellingSlice";

import SellingFromStepsBtn from "../../../components/ui/SellingFormStepsBtn";

const Step3 = () => {
  const dispatch = useDispatch();

  const isFocused = useIsFocused();
  useEffect(() => {
    isFocused && dispatch(changeProgress(3));
  }, [isFocused]);
  return (
    <View>
      <SellingFormSteps />
      <View>
        <SellingFromStepsBtn
          fPath="/customers/selling/final"
          bPath="/customers/selling/step2"
          forwIsShown={false}
          checkIsShown={true}
        />
      </View>
    </View>
  );
};

export default Step3;

const styles = StyleSheet.create({});

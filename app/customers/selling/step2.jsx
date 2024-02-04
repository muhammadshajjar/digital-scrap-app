import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import SellingFormSteps from "../../../components/ui/SellingFormSteps";

import { useIsFocused } from "@react-navigation/native";

import { useDispatch } from "react-redux";
import { changeProgress } from "../../../store/redux/sellingSlice";

import SellingFromStepsBtn from "../../../components/ui/SellingFormStepsBtn";

const Step2 = () => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  useEffect(() => {
    isFocused && dispatch(changeProgress(2));
  }, [isFocused]);
  
  return (
    <View>
      <SellingFormSteps />
      <Text>Step2</Text>
      <SellingFromStepsBtn
        fPath="/customers/selling/step3"
        bPath="/customers/selling/form"
      />
    </View>
  );
};

export default Step2;

const styles = StyleSheet.create({});

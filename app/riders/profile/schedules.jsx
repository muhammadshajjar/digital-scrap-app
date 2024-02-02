import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScheduleCard from "../../../components/ui/ScheduleCard";
import { COLORS } from "../../../constants/Colors";

const Schedules = () => {
  return (
    <View style={styles.container}>
      <ScheduleCard />
    </View>
  );
};

export default Schedules;

const styles = StyleSheet.create({
  container:{
    paddingVertical:36,
    paddingHorizontal:10,
    backgroundColor:COLORS.primaryBg,
    flex:1,
  }
});

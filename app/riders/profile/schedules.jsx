import { StyleSheet, Text, View ,FlatList} from "react-native";
import React from "react";
import ScheduleCard from "../../../components/ui/ScheduleCard";
import { COLORS } from "../../../constants/Colors";
import { RIDERSSCHEDULESDATA } from "../../../lib/dummyData";
import RiderScheduleCard from "../../../components/ui/RiderScheduleCard";

const Schedules = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={RIDERSSCHEDULESDATA}
        renderItem={({ item }) => <RiderScheduleCard data={item} settings={true} />}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Schedules;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primaryBg,
    flex: 1,
    paddingVertical: 25,
    paddingHorizontal: 12,
  },
});

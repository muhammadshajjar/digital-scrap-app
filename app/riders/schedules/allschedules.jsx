import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { RIDERSSCHEDULESDATA } from "../../../lib/dummyData";
import RiderScheduleCard from "../../../components/ui/RiderScheduleCard";
import { COLORS } from "../../../constants/Colors";


const AllSchedules = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={RIDERSSCHEDULESDATA}
        renderItem={({ item }) => <RiderScheduleCard data={item} />}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default AllSchedules;

const styles = StyleSheet.create({
  container: { backgroundColor: COLORS.primaryBg, flex: 1, paddingVertical: 25,paddingHorizontal:12 },
  title: {
    fontSize: 18,
    fontFamily: "Montserrat-SemiBold",
  },
});

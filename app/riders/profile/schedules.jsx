import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import ScheduleCard from "../../../components/ui/ScheduleCard";
import { COLORS } from "../../../constants/Colors";
import RiderScheduleCard from "../../../components/ui/RiderScheduleCard";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { getAllSchedules } from "../../../lib/firebase";

const Schedules = () => {
  const currentUser = useSelector((state) => state.user.personalInfo);
  const scheduleData = {
    type: "rider",
    id: currentUser?.uid,
  };
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["schedule", currentUser?.uid],
    queryFn: () => getAllSchedules(scheduleData),
  });

  if (isError) {
    Alert.alert("Error", error.message);
  }
  return (
    <View style={styles.container}>
      {data && (
        <FlatList
          data={data}
          renderItem={({ item }) => <RiderScheduleCard data={item} />}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <Text style={styles.feedBackTxt}>No Schedule Found!</Text>
          }
        />
      )}
      {isPending && (
        <ActivityIndicator
          style={{ marginTop: 20 }}
          size="small"
          color={COLORS.primaryGreen}
        />
      )}
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
  title: {
    fontSize: 18,
    fontFamily: "Montserrat-SemiBold",
  },
  feedBackTxt: {
    textAlign: "center",
    marginTop: 20,
    color: "red",
  },
});

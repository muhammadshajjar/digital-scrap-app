import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
} from "react-native";
import React from "react";
import ScheduleCard from "../../../components/ui/ScheduleCard";
import { COLORS } from "../../../constants/Colors";
import { useQuery } from "@tanstack/react-query";
import { getAllSchedules } from "../../../lib/firebase";
import { useSelector } from "react-redux";

const Schedules = () => {
  const currentUser = useSelector((state) => state.user.personalInfo);
  const scheduleData = {
    type: "customer",
    id: currentUser?.uid,
  };
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["schedule", currentUser?.uid],
    queryFn: () => getAllSchedules(scheduleData),
  });

  if (isError) {
    Alert.alert("Error", error.message);
  }
  // console.log(data);
  return (
    <View style={styles.container}>
      {data && (
        <FlatList
          data={data}
          renderItem={({ item }) => <ScheduleCard data={item} />}
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
    paddingVertical: 36,
    paddingHorizontal: 10,
    backgroundColor: COLORS.primaryBg,
    flex: 1,
  },
});

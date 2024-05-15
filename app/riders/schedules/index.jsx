import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Toggle from "react-native-toggle-element";
import { COLORS } from "../../../constants/Colors";
import { Link, router } from "expo-router";
import RiderScheduleCard from "../../../components/ui/RiderScheduleCard";
import { getAllSchedules } from "../../../lib/firebase";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { filterTodaySchedules } from "../../../helper/utilityFunctions";

const Home = () => {
  const [toggleValue, setToggleValue] = useState(false);
  const currentUser = useSelector((state) => state.user.personalInfo);

  const toggleSwitch = (val) => {
    setToggleValue((previousState) => !previousState);
    if (val) {
    }
  };
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

  let todaysSchedules;
  if (data) {
    todaysSchedules = filterTodaySchedules(data);
  }

  const lanunchRouteMapHandler = () => {
    if (todaysSchedules.length > 0) {
      router.push("/riders/schedules/map");
    } else {
      Alert.alert("Oops😬", "No Schedules for today");
    }
  };
  return (
    <>
      <SafeAreaView edges={["top"]} style={styles.header}>
        <Toggle
          value={toggleValue}
          onPress={toggleSwitch}
          leftTitle={<Text style={styles.labelTxt}>Offline</Text>}
          rightTitle={<Text style={styles.labelTxt}>Online</Text>}
          trackBarStyle={{
            backgroundColor: "white",
          }}
          trackBar={styles.trackBar}
          thumbStyle={{ backgroundColor: COLORS.primaryGreen }}
          thumbButton={styles.thumbButton}
        />
      </SafeAreaView>

      <View style={styles.content}>
        <View style={styles.contentHeader}>
          <Text style={styles.title}>Today's Schedules</Text>
          <Link style={styles.viewTxt} href={"/riders/schedules/allschedules"}>
            View All
          </Link>
        </View>
        <View style={{ height: "73%" }}>
          {data && (
            <FlatList
              data={todaysSchedules}
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

        <TouchableOpacity
          style={styles.mapBtn}
          onPress={lanunchRouteMapHandler}
        >
          <Text style={styles.mapBtnTxt}>Map</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  header: {
    backgroundColor: COLORS.primaryGreen,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  labelTxt: {
    fontSize: 18,
    fontFamily: "Montserrat-Medium",
  },
  trackBar: {
    height: 55,
    width: 200,
    borderWidth: 3,
    radius: 100,
  },
  thumbButton: {
    color: "black",
    textAlign: "center",
    fontSize: 20,
    width: 100,
    borderWidth: 19,
    borderColor: "white",
  },
  content: {
    backgroundColor: COLORS.primaryBg,
    flex: 1,
    padding: 12,
  },
  contentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },
  title: {
    fontSize: 18,
    fontFamily: "Montserrat-SemiBold",
  },

  viewTxt: {
    fontSize: 18,
    fontFamily: "Montserrat-SemiBold",
    textDecorationLine: "underline",
    color: COLORS.primaryGreen,
  },
  mapBtn: {
    backgroundColor: "black",
    paddingVertical: 16,
    paddingHorizontal: 28,
    borderRadius: 59,
    width: 120,
    alignSelf: "center",
    marginTop: 8,
    position: "absolute",
    bottom: 90,
  },
  mapBtnTxt: {
    color: "white",
    fontSize: 16,
    fontFamily: "Montserrat-SemiBold",
    textAlign: "center",
  },
  feedBackTxt: {
    textAlign: "center",
    marginTop: 20,
    color: "red",
  },
});

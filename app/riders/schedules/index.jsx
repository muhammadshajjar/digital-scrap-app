import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Toggle from "react-native-toggle-element";
import { COLORS } from "../../../constants/Colors";
import { Link, router } from "expo-router";
import RiderScheduleCard from "../../../components/ui/RiderScheduleCard";
import { RIDERSSCHEDULESDATA } from "../../../lib/dummyData";

// const data = Array.from({ length: 6 }, (_, index) => index + 1);

const Home = () => {
  const [toggleValue, setToggleValue] = useState(false);

  const toggleSwitch = (val) => {
    setToggleValue((previousState) => !previousState);
    if (val) {
      console.log("ONLINE");
    }
  };
  return (
    <>
      <SafeAreaView edges={["top"]} style={styles.header}>
        <Toggle
          value={toggleValue}
          onPress={toggleSwitch}
          leftTitle={<Text style={styles.labelTxt}>Offline</Text>} // Increase font size for Offline
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
          <FlatList
            data={RIDERSSCHEDULESDATA}
            renderItem={({ item }) => <RiderScheduleCard data={item} />}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
          />
        </View>

        <TouchableOpacity
          style={styles.mapBtn}
          onPress={() => router.push("/riders/schedules/map")}
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
});

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

import { COLORS } from "../../constants/Colors";

const Intro = () => {
  return (
    <>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={require("../../assets/images/introillustration.png")}
          placeholder="Into Illustration Image"
          contentFit="contain"
          transition={1000}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.heroTitle}>Transform Trash into Treasure</Text>
        <Text style={styles.heroTxt}>
          Join us in a journey to revolutionize scrap management. With Digital
          Scrap, your trash becomes your treasure.
        </Text>

        <TouchableOpacity
          style={styles.heroBtn}
          onPress={() => router.push("/login")}
        >
          <Text style={styles.heroBtnText}>Explore Now</Text>
          <Ionicons name="arrow-forward" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.privacyText}>Privacy Policy</Text>
      </View>
    </>
  );
};

export default Intro;

const styles = StyleSheet.create({
  imgContainer: {
    flex: 4.5,
  },
  img: {
    height: "100%",
    width: "100",
  },
  content: {
    flex: 3,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  heroTitle: {
    fontFamily: "Montserrat-Bold",
    fontSize: 38,
    textAlign: "center",
  },
  heroTxt: {
    fontFamily: "Montserrat-Regular",
    fontSize: 17,
    textAlign: "center",
    marginVertical: 20,
    lineHeight: 26,
  },
  heroBtn: {
    backgroundColor: COLORS.primaryGreen,
    paddingVertical: 15,
    marginVertical: 6,
    width: "75%",
    alignSelf: "center",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  heroBtnText: {
    textAlign: "center",
    fontFamily: "Montserrat-SemiBold",
    fontSize: 18,
    color: "white",
    marginRight: 8,
  },
  privacyText: {
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    marginTop: 4,
  },
});

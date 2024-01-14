import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import React, { useState } from "react";
import { router } from "expo-router";

import { COLORS } from "../../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const ListingDetail = () => {
  const [addToWishList, setAddToWishList] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.img}
          source={require("../../../assets/images/anitiquekeys.png")}
        />
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actions} onPress={() => router.back()}>
          <Ionicons name="arrow-back-outline" size={25} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actions}
          onPress={() => setAddToWishList((prevState) => !prevState)}
        >
          {addToWishList ? (
            <Ionicons name="heart" size={24} color="black" />
          ) : (
            <Ionicons name="heart-outline" size={25} color="black" />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.sperator}></View>
        <View style={styles.basicInfo}>
          <Text style={styles.title}>Antique Keys</Text>
          <View style={styles.rowFlex}>
            <Text style={styles.ratingTxt}>10/10</Text>
          </View>
        </View>

        <View style={[styles.rowFlex, { justifyContent: "space-between" }]}>
          <View>
            <View style={[styles.rowFlex, { marginBottom: 6 }]}>
              <MaterialIcons name="category" size={24} color="gray" />
              <Text style={styles.detailsTxt}>Metal</Text>
            </View>
            <View style={styles.rowFlex}>
              <MaterialIcons name="description" size={24} color="gray" />
              <Text style={styles.detailsTxt}>
                Vintage (early to mid-20th century)
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.detailsSperator}></View>

        <Text style={styles.headingTxt}>Discription</Text>

        <ScrollView>
          <Text style={styles.descriptionTxt}>
            Unlock the past with this captivating collection of vintage antique
            keys. This set features a variety of keys, each with its unique
            style and character. These keys are not only functional but also
            carry the charm of a bygone era Whether you're a collector or
            looking for a conversation-starting decor piece, these keys offer a
            glimpse into history.
          </Text>
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <View>
          <Text style={styles.regularTxt}>Price</Text>
          <Text
            style={{
              fontFamily: "Montserrat-Bold",
              fontSize: 20,
              color: COLORS.primaryGreen,
            }}
          >
            Rs 9,000
          </Text>
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => router.push("cartmodal")}
        >
          <Text style={styles.btnTxt}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ListingDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    height: "50%",
  },
  img: {
    height: "100%",
    width: "100%",
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    position: "absolute",
    top: 50,
    width: "100%",
  },
  actions: {
    height: 45,
    width: 45,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  sperator: {
    height: 4,
    backgroundColor: COLORS.lightGreyBg,
    width: 50,
    alignSelf: "center",
  },
  contentContainer: {
    backgroundColor: "white",
    marginTop: -55,
    flex: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  basicInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    fontFamily: "Montserrat-Bold",
  },
  ratingTxt: {
    fontSize: 14,
    fontFamily: "Montserrat-Light",
  },
  rowFlex: {
    flexDirection: "row",
    alignItems: "center",
  },

  detailsSperator: {
    height: 2,
    width: "100%",
    backgroundColor: "#D9D9D9",
    marginTop: 22,
  },
  detailsTxt: {
    fontSize: 16,
    fontFamily: "Montserrat-Regular",
    marginLeft: 4,
  },
  mapTxt: {
    fontSize: 15,
    fontFamily: "Montserrat-Medium",
    color: COLORS.primaryGreen,
  },
  descriptionTxt: {
    fontSize: 17,
    fontFamily: "Montserrat-Regular",
  },
  headingTxt: {
    fontSize: 19,
    fontFamily: "Montserrat-SemiBold",
    marginVertical: 10,
  },
  guestTxt: {
    fontSize: 15,
    fontFamily: "Montserrat-Medium",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    backgroundColor: COLORS.lightGreyBg,
    backgroundColor: "white",
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
    borderWidth: 0.5,
    borderColor: COLORS.lightGreyBg,
  },
  regularTxt: {
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
  },
  btn: {
    backgroundColor: COLORS.primaryGreen,
    padding: 15,
    borderRadius: 12,
  },
  btnTxt: {
    fontSize: 18,
    fontFamily: "Montserrat-Medium",
    color: "white",
  },
});

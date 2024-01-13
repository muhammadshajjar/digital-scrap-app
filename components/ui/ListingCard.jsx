import { StyleSheet, Text, View, Link, TouchableOpacity } from "react-native";
import React from "react";

import { Image } from "expo-image";
import { router } from "expo-router";

const ListingCard = ({ listingData }) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => router.push(`/customers/marketplace/${listingData?.id}`)}
    >
      <View>
        <Image source={listingData?.imagePath} style={{ aspectRatio: 3 / 2 }} />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.pricingCont}>
          <Text style={styles.price}>Rs. {listingData?.price}</Text>
          <Text style={styles.condition}>{listingData?.condition}/10</Text>
        </View>
        <Text style={styles.title}>{listingData?.title}</Text>
        <Text style={styles.date}>{listingData?.publishAt}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListingCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 3,
    width: "45%",
    borderRadius: 4,
  },
  contentContainer: {
    padding: 10,
  },
  pricingCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 7,
  },
  price: {
    fontSize: 15,
    fontFamily: "Montserrat-SemiBold",
  },
  condition: {
    fontFamily: "Montserrat-Bold",
  },
  title: {
    fontFamily: "Montserrat-Medium",
    fontSize: 15,
    marginVertical: 4,
  },
  date: {
    fontFamily: "Montserrat-Regular",
    marginTop: 6,
  },
});

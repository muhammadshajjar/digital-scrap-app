import {
  StyleSheet,
  Text,
  View,
  Link,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";

import { Image } from "expo-image";
import { router } from "expo-router";
import { COLORS } from "../../constants/Colors";

const ListingCard = ({ listingData }) => {
  const [pictureLoading, setPictureLoading] = useState(true);
  const transformedParamsData = {
    ...listingData,
    pictures: listingData?.pictures[0]?.url,
  };
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        router.push({
          pathname: `/customers/marketplace/${listingData?.id}`,
          params: transformedParamsData,
        })
      }
    >
      <View>
        <Image
          source={{ uri: listingData?.pictures[0]?.url }}
          style={{ aspectRatio: 3 / 2 }}
          onLoad={() => setPictureLoading(false)}
        />
        {pictureLoading && (
          <ActivityIndicator
            size="small"
            color={COLORS.primaryGreen}
            style={styles.activityIndicator}
          />
        )}
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.pricingCont}>
          <Text style={styles.price}>Rs. {listingData?.price}</Text>
          <Text style={styles.condition}>{listingData?.condition}/10</Text>
        </View>
        <Text style={styles.title}>{listingData?.title}</Text>
        <Text style={styles.date}>
          {Math.floor(Math.random() * 10)} days ago
        </Text>
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
  activityIndicator: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primaryBg,
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

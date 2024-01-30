import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { Link } from "expo-router";

import { COLORS } from "../../../../constants/Colors";
import ListingCard from "../../../../components/ui/ListingCard";
import { MARKETPLACELISTING } from "../../../../lib/dummyData";

const Scrap = () => {
  return (
    <View
      style={{
        backgroundColor: COLORS.primaryBg,
        flex: 1,
        padding: 15,
        paddingBottom: 110,
      }}
    >
      <FlatList
        showsVerticalScrollIndicator={false}
        data={MARKETPLACELISTING}
        renderItem={({ item }) => <ListingCard listingData={item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{
          gap: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
        contentContainerStyle={{ gap: 20 }}
      />
    </View>
  );
};

export default Scrap;

const styles = StyleSheet.create({});

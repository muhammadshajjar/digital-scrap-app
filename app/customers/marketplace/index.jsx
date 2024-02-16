import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getMarketPlaceItemByType } from "../../../lib/firebase";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import ListingCard from "../../../components/ui/ListingCard";
import { COLORS } from "../../../constants/Colors";

import firestore from "@react-native-firebase/firestore";

const listenToFirebaseChanges = () => {
  const queryClient = useQueryClient();
  useEffect(() => {
    console.log("listenToFirebaseChanges");
    const unsubscribe = firestore()
      .collection("listings")
      .onSnapshot((snapshot) => {
        // Invalidate relevant query cache entries when data changes
        snapshot.docChanges().forEach((change) => {
          if (
            change.type === "added" ||
            change.type === "modified" ||
            change.type === "removed"
          ) {
            queryClient.invalidateQueries({
              queryKey: ["marketplace"],
            });
          }
        });
      });

    return () => unsubscribe();
  }, []);
};

const listings = () => {
  //on first render listen to firebase changes if there are changes then revalide the cache

  listenToFirebaseChanges();

  const [activeTab, setActiveTab] = useState("scrap");
  const marketplace = useSelector((state) => state.marketplace);

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["marketplace"],
    queryFn: getMarketPlaceItemByType,
  });

  const filteredData =
    data &&
    data?.filter(
      (item) =>
        item.type === activeTab &&
        item.title.toLowerCase().includes(marketplace.searchQuery.toLowerCase())
    );

  return (
    <View>
      <View style={styles.tabBarStyle}>
        <TouchableOpacity
          style={[
            styles.tabBarBtn,
            activeTab === "scrap" && {
              borderBottomColor: "white",
              borderBottomWidth: 6,
            },
          ]}
          onPress={() => setActiveTab("scrap")}
        >
          <Text style={styles.tabBarLabelStyle}>Scrap</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabBarBtn,
            activeTab === "antique" && {
              borderBottomColor: "white",
              borderBottomWidth: 6,
            },
          ]}
          onPress={() => setActiveTab("antique")}
        >
          <Text style={styles.tabBarLabelStyle}>Antique</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          backgroundColor: COLORS.primaryBg,
          padding: 15,
          height: "90%",
        }}
      >
        {isPending && (
          <ActivityIndicator
            style={{ marginTop: 20 }}
            size="small"
            color={COLORS.primaryGreen}
          />
        )}
        {isError && Alert.alert("Error Fetching Marketplace", error?.message)}
        <FlatList
          showsVerticalScrollIndicator={false}
          data={filteredData}
          renderItem={({ item }) => <ListingCard listingData={item} />}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={{
            gap: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
          contentContainerStyle={{ gap: 20 }}
          ListEmptyComponent={
            <Text style={{ textAlign: "center", marginTop: 20, color: "red" }}>
              No Data Found!
            </Text>
          }
        />
      </View>
    </View>
  );
};

export default listings;

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: COLORS.primaryGreen,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tabBarLabelStyle: {
    fontSize: 18,
    textTransform: "capitalize",
    color: "white",
    fontFamily: "Montserrat-SemiBold",
    marginTop: 10,
    textAlign: "center",
  },
  tabBarBtn: {
    width: "50%",
    padding: 10,
  },
});

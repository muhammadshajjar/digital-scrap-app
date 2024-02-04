import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";

import { router } from "expo-router";

import CategoryCard from "../../../components/ui/CategoryCard";
import { CATEGORIESDATA } from "../../../lib/dummyData";
import { COLORS } from "../../../constants/Colors";

import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";

import { addSelectedCategory } from "../../../store/redux/sellingSlice";

const SellingHome = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const dispatch = useDispatch();

  const handleCategoryPress = (categoryId) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(categoryId)
        ? prevSelected.filter((id) => id !== categoryId)
        : [...prevSelected, categoryId]
    );
  };

  const nextWithSelectedCategoriesHandler = () => {
    if (selectedCategories.length > 0) {
      dispatch(addSelectedCategory(selectedCategories));
      router.push("/customers/selling/form");
    } else {
      Alert.alert("Error", "Please select a category!");
    }
  };

  return (
    <View>
      <StatusBar animated={true} barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.headerTxt}>Welcome, User! 👋🏻 </Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.heroTitle}>Your scrap belongs to?</Text>
        <FlatList
          contentContainerStyle={styles.categoriesContainer}
          data={CATEGORIESDATA}
          renderItem={({ item }) => (
            <CategoryCard
              categoryData={item}
              isSelected={selectedCategories.includes(item.id)}
              onPress={() => handleCategoryPress(item.id)}
            />
          )}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
        <Pressable
          style={styles.goNextBtn}
          onPress={nextWithSelectedCategoriesHandler}
        >
          <Ionicons name="arrow-forward-sharp" size={30} color="white" />
        </Pressable>
      </View>
    </View>
  );
};

export default SellingHome;

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.primaryGreen,
    height: "10%",
    justifyContent: "flex-end",
  },
  headerTxt: {
    fontSize: 18,
    fontFamily: "Montserrat-SemiBold",
    padding: 10,
    color: "white",
    textAlign: "center",
  },
  content: {
    height: "90%",
    backgroundColor: "white",
    padding: 10,
  },
  heroTitle: {
    fontFamily: "Montserrat-Bold",
    fontSize: 26,
    marginVertical: 18,
  },
  categoriesContainer: {
    padding: 20,
    gap: 20,
    alignItems: "center",
  },
  goNextBtn: {
    fontSize: 16,
    color: "black",
    position: "absolute",
    right: 30,
    bottom: 100,
    height: 60,
    width: 60,
    backgroundColor: COLORS.primaryGreen,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 35,
  },
});

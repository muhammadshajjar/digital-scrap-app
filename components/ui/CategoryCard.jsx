import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { COLORS } from "../../constants/Colors";

const CategoryCard = ({ categoryData,isSelected, onPress }) => {
  const imagePath = categoryData?.imagePath;
  return (
    <Pressable
      style={
        {
          backgroundColor: isSelected ? "#DDF8E2" : "white",
          borderColor: isSelected ? COLORS.primaryGreen : "#B3B3B3",
          borderWidth: isSelected ? 2:1,
          ...styles.card,
        }
      }
      onPress={onPress}
    >
      <View style={styles.imgContainer}>
        <Image
          style={styles.image}
          source={imagePath}
          placeholder={`${categoryData?.name} Illustration`}
          contentFit="cover"
          transition={1000}
        />
      </View>
      <Text style={styles.descTxt}>{categoryData?.name}</Text>
    </Pressable>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 7,
    width: "45%",
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
 
  },
  imgContainer: {
    height: 62,
    width: 62,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  descTxt: {
    fontFamily: "Montserrat-SemiBold",
    color: "#797979",
    fontSize: 19,
    marginTop: 8,
  },
});

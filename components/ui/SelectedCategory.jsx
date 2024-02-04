import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { COLORS } from "../../constants/Colors";

const SelectedCategory = ({ categoryData }) => {
  return (
    <View style={styles.category}>
      <Text style={styles.categoryTitle}>
        {categoryData.id.replace(/[0-9]/g, "").charAt(0).toUpperCase() +
          categoryData.id.replace(/[0-9]/g, "").slice(1)}
      </Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={categoryData?.subcategories}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.subCategroryTitle}>{item.name}</Text>
            <Text style={styles.price}>
              {item.price}
              <Text style={styles.label}> / KG</Text>
            </Text>
          </View>
        )}
        keyExtractor={(item) => Math.random().toString()}
      />
    </View>
  );
};

export default SelectedCategory;

const styles = StyleSheet.create({
  category: {
    marginVertical: 15,
  },
  card: {
    backgroundColor: COLORS.lightGreyBg,
    width: 170,
    height: 100,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 6,
    justifyContent: "space-between",
    marginRight: 15,
  },
  categoryTitle: {
    fontFamily: "Montserrat-Medium",
    fontSize: 20,
    marginVertical: 16,
  },

  subCategroryTitle: {
    fontFamily: "Montserrat-Medium",
    fontSize: 17,
  },
  price: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 16,
    color: COLORS.primaryGreen,
  },
  label: {
    fontSize: 12,
    color: "#858585",
  },
});

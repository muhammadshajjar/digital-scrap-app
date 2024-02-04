import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";

import { useDispatch, useSelector } from "react-redux";

import { changeProgress } from "../../../store/redux/sellingSlice";
import SellingFormSteps from "../../../components/ui/SellingFormSteps";
import { SUBCATEGORIESDATA } from "../../../lib/dummyData";
import { mergeSubCategories } from "../../../helper/utilityFunctions";
import SelectedCategory from "../../../components/ui/SelectedCategory";
import SellingFromStepsBtn from "../../../components/ui/SellingFormStepsBtn";

const SellingForm = () => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const selectedCategories = useSelector(
    (state) => state.selling.selectedCategory
  );


  const mergedCategories = mergeSubCategories(
    selectedCategories,
    SUBCATEGORIESDATA
  );

  useEffect(() => {
    isFocused && dispatch(changeProgress(1));
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <SellingFormSteps />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={mergedCategories}
        renderItem={({ item }) => <SelectedCategory categoryData={item} />}
        keyExtractor={(item) => Math.random().toString()}
      />

      <SellingFromStepsBtn
        backIsShown={false}
        fPath="/customers/selling/step2"
      />
    </View>
  );
};

export default SellingForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 14,
  },
  content: {
    marginTop: 40,
  },
});

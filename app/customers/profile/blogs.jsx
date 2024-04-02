import { StyleSheet, Text, View, FlatList } from "react-native";

import { getAllBlogs } from "../../../lib/firebase";

import { useQuery } from "@tanstack/react-query";

import BlogCard from "../../../components/ui/BlogCard";
import { COLORS } from "../../../constants/Colors";

const Blogs = () => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["blogs"],
    queryFn: getAllBlogs,
  });

  if (isPending) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>The Latest From Our Publications 📚</Text>
      <View style={{ height: "78%" }}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <BlogCard blogPost={item} forCustomer={true} />
          )}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Blogs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBg,
    padding: 10,
  },
  title: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 20,
    textAlign: "center",
    padding: 12,
  },
});

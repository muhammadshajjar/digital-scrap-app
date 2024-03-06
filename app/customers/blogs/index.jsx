import {
  StyleSheet,
  Text,
  View,
} from "react-native";


import { getAllBlogs } from "../../../lib/firebase";
import { Link } from "expo-router";

import {
  useQuery,
} from "@tanstack/react-query";

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
    <View>
      <Link href="/customers/blogs/1">Read More</Link>
    </View>
  );
};

export default Blogs;

const styles = StyleSheet.create({});

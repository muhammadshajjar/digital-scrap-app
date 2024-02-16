import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { getAllBlogs } from "../../lib/firebase";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const News = () => {
  const queryClient = useQueryClient();

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

  const testInvalidation = () => {
    console.log("Button is Clicked");
    queryClient.invalidateQueries({ queryKey: ["blogs"] });
  };
  return (
    <SafeAreaView>
      <View>{data && <Text>{data[0]?.breifintro}</Text>}</View>

      <TouchableOpacity onPress={testInvalidation}>
        <Text>Test Invalidate Query</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default News;

const styles = StyleSheet.create({});

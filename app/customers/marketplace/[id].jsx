import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Details = () => {
  const {id}=useLocalSearchParams();
  return (
    <SafeAreaView>
      <Text>MARKET PLACE DETAIL for id {id}</Text>
    </SafeAreaView>
  );
};

export default Details;

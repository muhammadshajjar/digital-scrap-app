import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import CartItem from "../components/ui/CartItem";

import { COLORS } from "../constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
const CartModal = () => {
  // If the page was reloaded or navigated to directly, then the modal should be presented as
  // a full screen page. You may need to change the UI to account for this.
  const isPresented = router.canGoBack();
  return (
    <SafeAreaView
      edges={["bottom"]}
      style={{
        flex: 1,
        paddingHorizontal: 12,
        paddingVertical: 15,
        backgroundColor: COLORS.primaryBg,
      }}
    >
      <View style={{ height: "64%" }}>
        <FlatList
        showsVerticalScrollIndicator={false}
          contentContainerStyle={{ gap: 10 }}
          data={[...Array(10).keys()]}
          renderItem={({ item }) => <CartItem />}
          keyExtractor={(item) => item}
        />
      </View>
      <View style={styles.calculationContainer}>
        <View style={styles.flexRow}>
          <Text style={styles.totalHeading}>Sub Total</Text>
          <Text style={styles.pricing}>Rs 6,000</Text>
        </View>
        <View style={styles.flexRow}>
          <Text style={styles.totalHeading}>Delivery cost</Text>
          <Text style={styles.pricing}>Rs 500</Text>
        </View>
        <View style={styles.sperator}></View>

        <View style={styles.flexRow}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.pricing}>Rs 6,500</Text>
        </View>

        <TouchableOpacity style={styles.btn} onPress={()=>router.push("/customers/marketplace/checkout")}>
          <Text style={styles.btnTxt}>Checkout</Text>
        </TouchableOpacity>
      </View>

      {/* Use `../` as a simple way to navigate to the root. This is not analogous to "goBack". */}
      {!isPresented && <Link href="../">Dismiss</Link>}
      {/* Native modals have dark backgrounds on iOS, set the status bar to light content. */}
      <StatusBar style="light" />
    </SafeAreaView>
  );
};
export default CartModal;

const styles = StyleSheet.create({
  calculationContainer: {
    marginTop: 20,
  },
  sperator: {
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 2,
    borderColor: "black",
    borderColor: COLORS.primaryGreen,
    marginVertical: 8,
  },
  totalHeading: {
    color: COLORS.primaryGrey,
    fontFamily: "Montserrat-Medium",
    fontSize: 18,
  },
  pricing: {
    fontSize: 20,
    fontFamily: "Montserrat-Bold",
  },

  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  totalLabel: {
    fontSize: 24,
    fontFamily: "Montserrat-SemiBold",
  },
  btn: {
    backgroundColor: COLORS.primaryGreen,
    paddingVertical: 20,
    borderRadius: 7,
    marginTop: 12,
  },
  btnTxt: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: "Montserrat-Bold",
    color: "white",
    letterSpacing: 1,
  },
});

import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import CartItem from "../components/ui/CartItem";

import { COLORS } from "../constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  addItemToCart,
  getCartData,
  removeItemFromCart,
} from "../lib/firebase";
import { useSelector } from "react-redux";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const CartModal = () => {
  const queryClient = useQueryClient();
  // If the page was reloaded or navigated to directly, then the modal should be presented as
  // a full screen page. You may need to change the UI to account for this.
  const isPresented = router.canGoBack();
  const currentUser = useSelector((state) => state.user.personalInfo);

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["cart", currentUser?.uid],
    queryFn: () => getCartData(currentUser?.uid),
  });

  const addItemMutation = useMutation({
    mutationFn: addItemToCart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart", currentUser?.uid] });
    },
  });
  const removeItemMutation = useMutation({
    mutationFn: removeItemFromCart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart", currentUser?.uid] });
    },
  });

  const increaseCartItemQuantity = (productId) => {
    addItemMutation.mutate({
      userId: currentUser?.uid,
      productId,
      quantity: 1,
    });
  };
  const decreaseCartItemQuantity = (productId) => {
    removeItemMutation.mutate({ productId, userId: currentUser?.uid });
  };

  // Pricing Calculations

  let subTotal = 0;
  if (data) {
    subTotal = data.reduce((acc, item) => {
      return acc + item.product.price * item.quantity;
    }, 0);
    console.log(subTotal);
  }

  // Total is subtotal plus delivery cost
  const deliveryCost = subTotal > 0 ? 500 : 0; // Example delivery cost
  const total = subTotal + deliveryCost;

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
        {isPending && (
          <ActivityIndicator
            style={{ marginTop: 20 }}
            size="small"
            color={COLORS.primaryGreen}
          />
        )}
        {isError && Alert.alert("Error Fetching Marketplace", error?.message)}
        {data && (
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ gap: 10 }}
            data={data}
            renderItem={({ item }) => (
              <CartItem
                itemData={item}
                onIncreaseCartQuantity={increaseCartItemQuantity}
                onDecreaseCartQuantity={decreaseCartItemQuantity}
              />
            )}
            keyExtractor={(item) => item.productId}
            ListEmptyComponent={
              <Text
                style={{ textAlign: "center", marginTop: 20, color: "red" }}
              >
                Your Cart is Empty!
              </Text>
            }
          />
        )}
      </View>
      <View style={styles.calculationContainer}>
        <View style={styles.flexRow}>
          <Text style={styles.totalHeading}>Sub Total</Text>
          <Text style={styles.pricing}>Rs {subTotal}</Text>
        </View>
        <View style={styles.flexRow}>
          <Text style={styles.totalHeading}>Delivery cost</Text>
          <Text style={styles.pricing}>Rs {deliveryCost}</Text>
        </View>
        <View style={styles.sperator}></View>

        <View style={styles.flexRow}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.pricing}>Rs {total}</Text>
        </View>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => router.push("/customers/marketplace/checkout")}
        >
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

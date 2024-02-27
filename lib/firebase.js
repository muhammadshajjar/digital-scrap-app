import firestore from "@react-native-firebase/firestore";
import storage from "@react-native-firebase/storage";

export const getAllBlogs = async () => {
  try {
    const result = await firestore().collection("blogs").get();
    const blogsData = result?.docs?.map((blog) => blog.data());
    // console.log("IN teh firebase ", blogsData);
    return blogsData;
  } catch (e) {
    throw new Error("Failed to fetch blogs: " + error.message);
  }
};

export const getMarketPlaceItemByType = async () => {
  try {
    const result = await firestore().collection("listings").get();
    const itemsData = result?.docs?.map((item) => {
      const data = item.data();
      // Add document ID to the data object
      data.id = item.id;
      return data;
    });
    // console.log("IN teh firebase ", itemsData);
    return itemsData;
  } catch (error) {
    throw new Error("Failed to fetch items: " + error.message);
  }
};

export const addItemToCart = async (cartData) => {
  // console.log(cartData);
  const { userId, productId, quantity } = cartData;

  try {
    const cartRef = firestore().collection("carts").doc(userId);
    const cartDoc = await cartRef.get();

    if (!cartDoc.exists) {
      await cartRef.set({
        userId: cartData?.userId,
        items: [{ productId, quantity }],
      });
    } else {
      const currentItems = cartDoc.data().items;
      const existingItemIndex = currentItems.findIndex(
        (item) => item.productId === productId
      );
      if (existingItemIndex !== -1) {
        // Item already exists, update quantity
        const updatedItems = [...currentItems];
        updatedItems[existingItemIndex].quantity += 1;
        await cartRef.update({ items: updatedItems });
      } else {
        // Item doesn't exist, add it to the cart
        const updatedItems = [...currentItems, { productId, quantity }];
        await cartRef.update({ items: updatedItems });
      }
    }
  } catch (err) {
    throw new Error("Failed to Add item to cart: " + err.message);
  }
};

export const removeItemFromCart = async (cartData) => {
  const { userId, productId } = cartData;

  try {
    const cartRef = firestore().collection("carts").doc(userId);
    const cartDoc = await cartRef.get();

    if (!cartDoc.exists) {
      throw new Error("Cart not found");
    }

    const currentItems = cartDoc.data().items;
    const existingItemIndex = currentItems.findIndex(
      (item) => item.productId === productId
    );

    if (existingItemIndex === -1) {
      throw new Error("Item not found in cart");
    }

    const updatedItems = [...currentItems];
    if (updatedItems[existingItemIndex].quantity > 1) {
      updatedItems[existingItemIndex].quantity -= 1;
    } else {
      updatedItems.splice(existingItemIndex, 1);
    }

    // Update the cart with the updated items list
    await cartRef.update({ items: updatedItems });
  } catch (err) {
    throw new Error("Failed to remove item from cart: " + err.message);
  }
};

export const getCartData = async (userId) => {
  // console.log("Does this call again??");
  try {
    const cartRef = firestore().collection("carts").doc(userId);
    const cartDoc = await cartRef.get();
    if (!cartDoc.exists) {
      return [];
    }
    const cartItems = cartDoc.data().items;
    const productPromises = cartItems.map((item) =>
      firestore().collection("listings").doc(item.productId).get()
    );
    const productSnapshots = await Promise.all(productPromises);
    const products = productSnapshots.map((snapshot) => snapshot.data());
    // Combine cart items with product information
    const cartData = cartItems.map((item, index) => ({
      ...item,
      product: products[index],
    }));

    // console.log(cartData);
    return cartData;
  } catch (err) {
    throw new Error("Failed to Fetch items of cart: " + err.message);
  }
};

export const removeCartForUser = async ({ userId }) => {
  console.log("Remvoing", userId);
  try {
    const cartRef = firestore().collection("carts").doc(userId);
    // Delete the cart document
    await cartRef.delete();
    return true;
  } catch (err) {
    throw new Error("Failed to remove cart for user: " + err.message);
  }
};

export const updateProfileInfo = async ({ userId, infoType, infoData }) => {
  try {
    const profileRef = firestore().collection("ridersprofile").doc(userId);
    const profileDoc = await profileRef.get();

    if (!profileDoc.exists) {
      const newData = {
        [infoType]: infoData,
        [`${infoType}Completed`]: true,
      };
      await profileRef.set(newData);
    } else {
      const existingData = profileDoc.data();
      await profileRef.update({
        [infoType]: { ...existingData[infoType], ...infoData }, // Merge existing and new infoData
        [`${infoType}Completed`]: true,
      });
    }
    return true;
  } catch (error) {
    throw new Error(
      `Failed to add/update ${infoType} information: ${error.message}`
    );
  }
};

export const getRiderProfile = async (userId) => {
  try {
    const profileRef = firestore().collection("ridersprofile").doc(userId);
    const profileDoc = await profileRef.get();

    if (!profileDoc.exists) {
      return null;
    }
    const profileData = profileDoc.data();

    return profileData;
  } catch (error) {
    throw new Error("Failed to fetch rider profile: " + error.message);
  }
};

import firestore from "@react-native-firebase/firestore";

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
    const itemsData = result?.docs?.map((item) => item.data());
    // console.log("IN teh firebase ", itemsData);
    return itemsData;
  } catch (error) {
    throw new Error("Failed to fetch items: " + error.message);
  }
};

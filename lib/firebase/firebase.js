
import { doc, collection, getDocs, getDoc } from "firebase/firestore";

import { db } from "./config";
export const getAllBlogs = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "blogs"));
    
      const blogsData = [];
      querySnapshot.forEach((doc) => {
        blogsData.push({ ...doc.data(), id: doc.id });
      });
  
      return blogsData;
    } catch (e) {
      console.error(e.message);
      throw new Error(e.message);
    }
  };
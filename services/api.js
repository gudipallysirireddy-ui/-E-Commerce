import axios from "axios";

const API_URL = "https://dummyjson.com/products";

export const fetchProducts = async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data.products; // IMPORTANT
  } catch (error) {
    console.error(error);
    return [];
  }
};
import { instance } from ".";

export const fetchSearchResult = async (title) => {
    const response = await instance.get(`api/products/?search=${title}`);
  
    return response.data
  }
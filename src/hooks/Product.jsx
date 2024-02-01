import { fetchCategoryData } from "@/api/fetchCategoryData";
import React from "react";

export function usePagesProducts(categoryId=2) {
  const [pagesProducts, setPagesProducts] = React.useState([]);

  React.useEffect(() => {
    async function fetchPagesProducts() {
      try {
        const data = await fetchCategoryData(categoryId);
        setPagesProducts(data);
      } catch (error) {
        console.error("API de xeta bas verdi!", error);
      } 
    }

    fetchPagesProducts()
  }, [categoryId]);

  return pagesProducts
}

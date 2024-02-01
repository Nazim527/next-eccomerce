"use client"
import React from "react";
import { fetchSearchResult } from "@/api/search";

export function useSearchResProduct(searchTitle) {
  const [searchProduct, setSearchProduct] = React.useState([]);

  React.useEffect(() => {
    async function fetchPagesProducts() {
      try {
        const data = await fetchSearchResult(searchTitle);
        setSearchProduct(data);
      } catch (error) {
        console.error("API de xeta bas verdi!", error);
      } 
    }

    fetchPagesProducts()
  }, [searchTitle]);

  return searchProduct
}

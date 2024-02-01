"use client"
import { getFetchAllProducts } from "@/api/fetchAllProductsData";
import React from "react";

export function useAllProducts() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getFetchAllProducts();
        setProducts(data);
      } catch (error) {
        console.error("API de xeta bas verdi!", error);
      }
    }
    fetchProducts()
  }, []);

  return products;
}

"use client";
import React from "react";
import { CategoryItem } from "@/components";
import { usePagesProducts } from "@/hooks/Product";
import "./style.scss";

const Categories = ({ params: { categoriesId } }) => {
  const categoryId = categoriesId?.[1] || 2;
  const categoryProducts = usePagesProducts(Number(categoryId));
  
  return (
    <div className="category_items">
      {categoryProducts?.products?.map((product) => (
        <CategoryItem
          id={product.id}
          image={product.main_image}
          description={product.description}
          title={product.title}
          count={product.amount_by_unit}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default Categories;

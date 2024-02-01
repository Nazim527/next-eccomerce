"use client"
import { useSearchResProduct } from '@/hooks/SearchRes';
import React from 'react'
import '../../[[...categoriesId]]/style.scss'
import { CategoryItem } from '@/components';

const ProductsId = ({searchParams: {search}}) => {
  const searchProducts = useSearchResProduct(search);
  return (
    <div className="category_items">
      {searchProducts?.products?.map((product) => (
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
  )
}

export default ProductsId
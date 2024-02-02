"use client"
import { useAllProducts } from '@/hooks/AllProducts'
import React from 'react'
import { AdminCategoryitem } from '@/components/admin'
import './products.scss'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'


const Products = () => {
  const dataProducts = useAllProducts()
  const router = useRouter()

  //Controlled auth
  const {logToken} = useSelector((state) => state.auth)

  if(logToken == "") {
    router.push("/admin/register")
  }
  return (
    <div className='products_items'>
      {dataProducts?.products?.map((product) => (
        <AdminCategoryitem 
        image={product.main_image} 
        title={product.title}
        count={product.amount_by_unit}
        unit={product.unit}
        price={product.price}
        />
      ))}
    </div>
  )
}

export default Products
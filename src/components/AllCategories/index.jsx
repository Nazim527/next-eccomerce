"use client"
import React from 'react'
import './style.scss'
import { Categories } from '@/hooks/Categories'
import { CategoryList } from '..'

const AllCategories = () => {
  const categories = Categories()
  return (
    <div className='all_categories'>
      {categories.map((category,index) => (
        <CategoryList id={category.id} title={category.title} icon={category.icon_svg}/>
      ))}
    </div>  
  )
}

export default AllCategories
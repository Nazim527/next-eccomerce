import React from 'react'
import Link from 'next/link'
import './style.scss'
import { FaAngleRight } from "react-icons/fa6";

const AdminCategory = ({ icon, title, id }) => {
  return (
    <Link href={`/admin/products`} className="category" key={id}>
      <div className="admin-category_name">
        {icon}
        {title}
      </div>
      <div className="direction">
        <FaAngleRight />
      </div>
    </Link>
  )
}

export default AdminCategory
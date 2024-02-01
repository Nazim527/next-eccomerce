"use client";
import React from "react";
import "./style.scss";
import { FaAngleRight } from "react-icons/fa6";
import Link from "next/link";

const CategoryList = ({ icon, title, id }) => {
  return (  
    <Link href={`/categories/${id}`} className="category" key={id}>
      <div className="category_name">
        <div className="icon" dangerouslySetInnerHTML={{ __html: icon }} />
        {title}
      </div>
      <div className="direction">
        <FaAngleRight />
      </div>
    </Link>
  );
};

export default CategoryList;

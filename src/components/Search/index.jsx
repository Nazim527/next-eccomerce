"use client";
import React, { useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import "./style.scss";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchInputRef = useRef(null);
  const router = useRouter();

  const handleSearch = () => {
    const query = searchInputRef.current.value;
    setSearchTerm(query);
    router.push(`/products/?search=${query}`);

    setSearchTerm("")
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <main className="search_production fluid">
      <h2>Groceries Delivered in 90 Minute</h2>
      <p>
        Get your healthy foods & snacks delivered at your doorsteps all day
        everyday
      </p>
      <div className="search_input">
        <input
          type="text"
          placeholder="Search your products from here"
          ref={searchInputRef}
          value={searchTerm}
          onChange={handleChange} 
        />
        <button onClick={handleSearch}>
          <BsSearch />
          Search
        </button>
      </div>
    </main>
  );
};

export default Search;

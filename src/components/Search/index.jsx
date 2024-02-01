import React from "react";
import { BsSearch } from "react-icons/bs";
import './style.scss'

const Search = () => {
  return (
    <main className="search_production fluid">
      <h2>Groceries Delivered in 90 Minute</h2>
      <p>
        Get your healthy foods & snacks delivered at your doorsteps all day
        everyday
      </p>
      <div className="search_input">
        <input type="text" placeholder="Search your products from here" />
        <button>
          <BsSearch />
          Search
        </button>
      </div>
    </main>
  );
};

export default Search;

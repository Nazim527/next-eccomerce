import React from "react";

const AdminCategoryItem = ({ image, count, title, price,unit }) => {
  return (
    <div className="category_item">
      <div className="item_header">
        <img src={image} />
      </div>

      <div className="item_footer">
        <div className="item_title">
          <h5>{title}</h5>
          <p>{count} {unit}</p>
        </div>

        <div className="item_add-card">
          <p>{price}$</p>
        </div>
      </div>
    </div>
  );
};

export default AdminCategoryItem;

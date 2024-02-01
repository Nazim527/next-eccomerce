"use client"
import React from "react";
import "./style.scss";
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
import { decliningPrice, removeCart, risingPrice } from "@/lib/features/basketSlice";
import { useDispatch, useSelector } from "react-redux";

const ShoppingCartItem = ({title,price,quantityProduct,firstPrice,image,count,id}) => {
  const dispatch = useDispatch()

  //! Items quantity
  const CountProduct = useSelector((state) => state.card.card)
  const handleMinusCount = () => {
    if (CountProduct.length > 0) {
        dispatch(decliningPrice({ id }));
    }
  }

  const handlePlusCount = () => {
    if (CountProduct.length > 0) {
        dispatch(risingPrice({ id }));
      }
  }
  return (
    <div className="shopping_cart-item">
      <div className="left_shopping_cart-item">
        <div className="quantity_item">
          <HiOutlinePlus className="icon" onClick={handlePlusCount}/>
          <p>{quantityProduct}</p>
          <HiOutlineMinus className="icon" onClick={handleMinusCount}/>
        </div>

        <img src={image} alt="sss" />

        <div className="item_info">
          <h5>{title}</h5>
          <p className="price">${firstPrice}</p>
          <p>{quantityProduct} X {count} pc</p>
        </div>
      </div>

      <div className="right_shopping_cart-item">
        <p className="totalPrice">${price}</p>
        <GrClose onClick={() => dispatch(removeCart(id))} style={{cursor: "pointer"}}/>
      </div>
    </div>
  );
};

export default ShoppingCartItem;

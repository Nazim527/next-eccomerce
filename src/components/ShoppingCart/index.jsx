"use client";
import React, { useState } from "react";
import "./style.scss";
import OverlayModal from "../Modal";
import { PiBasketLight } from "react-icons/pi";
import { VscError } from "react-icons/vsc";
import { BsFillBasket3Fill } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import { ShoppingCartItem } from "..";
import { useSelector } from "react-redux";

const ShoppingBasket = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (e) => {
    setIsModalOpen(true);
  };

  const closeModal = (e) => {
    setIsModalOpen(false);
  };

  //! use items
  const items = useSelector((state) => state.card.card);

  let totalPrice = 0;
  items.map((item) => {
    totalPrice += item.numPrice;
  });

  console.log(items);
  return (
    <>
      <div className="shopping_basket" onClick={openModal}>
        <div className="basket_header">
          <PiBasketLight className="icon" />
          <p>{items.length} Item</p>
        </div>

        <div className="basket_footer">
          <button>${totalPrice}</button>
        </div>
      </div>

      {/*//? ShoppingBasketModal */}
      {isModalOpen && (
        <OverlayModal
          classNameOverlay={"shopping_basket-overlay open"}
          className={"shopping_basket-modal open"}
          onClose={closeModal}
        >
          <div className="header_modal-basket">
            <div className="total_basket-item">
              <BsFillBasket3Fill className="icon" />
              <p>{items.length} Item</p>
            </div>

            <GrClose onClick={closeModal} />
          </div>

          {items.length > 0 ? (
            <div className="footer_modal-basket_items">
              {items.map((item) => (
                <ShoppingCartItem
                id={item.id}
                count={item.count}
                title={item.title} 
                image={item.image}
                firstPrice={item.firstPrice}
                quantityProduct={item.quantityProduct}
                price={item.numPrice}
                 />
              ))}
            </div>
          ) : (
            <div className="footer_modal-basket">
              <VscError />
              <p>No products not found</p>
            </div>
          )}
        </OverlayModal>
      )}
    </>
  );
};

export default ShoppingBasket;

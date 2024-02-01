"use client";
import React, { useState } from "react";
import "./style.scss";
import { PiShoppingCartBold } from "react-icons/pi";
import { Link } from "@chakra-ui/next-js";
import OverlayModal from "../Modal";
import { useDispatch } from "react-redux";
import { addToCArt } from "@/lib/features/basketSlice";

import { ImCheckmark } from "react-icons/im";

const CategoryItems = ({ image, count, title, price, description, id,unit }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const openModal = (e) => {
    const isButton = ["button", "svg", "path"].includes(
      e.target.tagName.toLowerCase()
    );

    if (!isButton) {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsButtonClicked(false);
  };

  //! send cart basket
  const dispatch = useDispatch();
  const numPrice = Number(price);
  const handleBtn = () => {
    dispatch(
      addToCArt({
        id,
        image,
        count,
        title,
        numPrice,
        firstPrice: numPrice,
        quantityProduct: 1,
      })
    );
    setIsButtonClicked(true);

    setTimeout(() => {
      setIsButtonClicked(false);
    }, 1000);
  };

  return (
    <>
      <div className="category_item" onClick={openModal}>
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
            <button
              className={`add_card ${isButtonClicked ? "clicked" : ""}`}
              onClick={handleBtn}
            >
              {isButtonClicked ? (
                <ImCheckmark />
              ) : (
                <>
                  <PiShoppingCartBold className="icon" />
                  Card
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* //! Modal */}
      {isModalOpen && (
        <OverlayModal className={"items_modal"} onClose={closeModal}>
          <div className="modal_left">
            <img src={image} />
          </div>

          <div className="modal_right">
            <div className="right_header">
              <h5>{title}</h5>
              <p>{count} pc</p>
            </div>

            <div className="right_center">
              <p>{description}</p>

              <div className="item_detail">
                <button>Fruits & Vegetables</button>
                <button>Vegetables</button>
              </div>
            </div>

            <div className="right_footer">
              <p>{price}$</p>
            </div>
          </div>
        </OverlayModal>
      )}
    </>
  );
};

export default CategoryItems;

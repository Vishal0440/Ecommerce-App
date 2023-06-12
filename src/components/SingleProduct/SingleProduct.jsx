import React from "react";
import { useState, useContext } from "react";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";

import "./SingleProduct.scss";
import RelatedProduct from "./RelatedProduct/RelatedProduct";

import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { Context } from "../../utils/context";

const SingleProduct = () => {
  const { id } = useParams();
  const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
  const { handleAddToCart } = useContext(Context);

  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prevState) => prevState + 1);
  };

  const decrement = () => {
    setQuantity((prevState) => {
      if (prevState === 1) return 1;
      return prevState - 1;
    });
  };

  if (!data) return;
  const product = data.data[0].attributes;
  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img
              src={
                "http://localhost:1337" + product?.img?.data[0]?.attributes?.url
              }
              alt=""
            />
          </div>
          <div className="right">
            <span className="name">{product.title}</span>
            <span className="price">₹{product.price}/-</span>
            <span className="desc">{product.desc}</span>

            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span onClick={decrement}>-</span>
                <span>{quantity}</span>
                <span onClick={increment}>+</span>
              </div>
              <button
                className="add-to-cart-button"
                onClick={() => {
                  handleAddToCart(data.data[0], quantity);
                  setQuantity(1);
                }}
              >
                <FaCartPlus fontSize={20} />
                ADD TO CART
              </button>
            </div>

            <span className="divider"></span>

            <div className="info-item">
              <span className="text-bold">
                Category:
                <span> {product.categories.data[0].attributes.title}</span>
              </span>

              <span className="text-bold">
                Share:
                <span>
                  <FaFacebookF fontSize={14} />
                  <FaInstagram fontSize={14} />
                  <FaLinkedinIn fontSize={14} />
                  <FaPinterest fontSize={14} />
                  <FaTwitter fontSize={14} />
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProduct
          productId={id}
          categoryId={product.categories.data[0].id}
        />
      </div>
    </div>
  );
};

export default SingleProduct;

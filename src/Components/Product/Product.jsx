/* eslint-disable react/prop-types */
import { useState } from "react";
import ItemProduct from "./ItemProduct";

export default function Product({ Card }) {
  const [heartStatus, setHeartStatus] = useState({});

  const handleHeartClick = (id) => {
    setHeartStatus((nextStatus) => ({
      ...nextStatus,
      [id]: !nextStatus[id],
    }));
  };

  return (
    <div className="container">
      <div id="product">
        <h2>Product</h2>
        <ItemProduct heartStatus={heartStatus} Card={Card} onHeartClick={handleHeartClick} />
      </div>
    </div>
  );
}

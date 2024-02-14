/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

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
        <div className="box-product">
          {Card.map((data) => (
            <div className="card" key={data.id}>
              <div className="card-header">
                <img src={data.img} alt="" />
                {/* <FontAwesomeIcon className="icon-heart" icon={faHeart} /> */}
                {/* <FontAwesomeIcon className={heartStatus[data.id] ? "icon-heart red" : "icon-heart"} icon={faHeart} onClick={() => handleHeartClick(data.id)} /> */}
                <FontAwesomeIcon className={heartStatus[data.id] ? "icon-heart red" : "icon-heart"} icon={faHeart} onClick={() => handleHeartClick(data.id)} />
              </div>
              <div className="card-body">
                <p>{data.judul}</p>
                <h3>{data.harga}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

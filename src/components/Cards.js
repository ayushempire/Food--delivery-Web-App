import React, { useRef, useState, useEffect } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";
// import { useActionData } from "react-router-dom";

export default function Cards(props) {
  let dispatch = useDispatchCart();
  let data = useCart();
  let options = props.options;
  let priceOption = Object.keys(options);

  const priceRef = useRef();
  const [qty, setqty] = useState(1);
  const [size, setsize] = useState("");

  const handleAddToCart = async () => {
    await dispatch({
      type: "ADD",
      id: props.foodItem._id,
      name: props.foodItem.name,
      price: finalPrice,
      qty: qty,
      size: size,
      img: props.foodItem.img,
    });

    console.log(data);
  };

  let finalPrice = qty * parseInt(options[size]);
  useEffect(() => {
    setsize(priceRef.current.value);
  }, []);

  return (
    <div>
      <div className="card mt-3" style={{ width: "19rem", maxHeight: "430px" }}>
        <img
          src={props.foodItem.img}
          className="card-img-top "
          alt="..."
          style={{ height: "140px", objectFit: "fill" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.foodItem.name}</h5>
          <p className="card-text">{props.foodItem.description}</p>
          {/* 
        Creating quantity dropdown 
        */}
          <div className="container w-100">
            <select
              className="m-2 h-100 bg-success rounded"
              onChange={(e) => setqty(e.target.value)}
            >
              {Array.from(Array(10), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            {/* 
        end of Creating quantity dropdown 
      */}

            {/* Creating size of food dropdown */}
            <select
              className=" h-100 m-2 bg-success rounded"
              ref={priceRef}
              onChange={(e) => setsize(e.target.value)}
            >
              {priceOption.map((data) => {
                return (
                  <option key={data} value={data}>
                    {data}
                  </option>
                );
              })}
            </select>

            <div className="d-inline h-100 fs-5">₹€{finalPrice}/-</div>
          </div>
          <hr></hr>
          <button
            className="btn btn-success ms-2 justify-center"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

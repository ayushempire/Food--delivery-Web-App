import React from "react";

export default function Cards(props) {
  let options = props.options;
  let priceOption = Object.keys(options);

  return (
    <div>
      <div>
        <div
          className="card mt-3"
          style={{ width: "18rem", maxHeight: "360px" }}
        >
          <img
            src="https://images.unsplash.com/photo-1552590635-27c2c2128abf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{props.foodName}</h5>
            <p className="card-text">this is card text</p>
            {/* 
        Creating quantity dropdown 
        */}
            <div className="container w-100">
              <select className="m-2 h-100 bg-success rounded">
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
              <select className=" h-100 m-2 bg-success rounded">
                {priceOption.map((data) => {
                  return (
                    <option key={data} value={data}>
                      {data}
                    </option>
                  );
                })}
              </select>
              {/* 
         end os Creating size of food dropdown 
        */}

              {/*
         total price tag 
         */}
              <div className="d-inline h-100 fs-5">Total Price</div>
              {/*
         end oftotal price tag 
         */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

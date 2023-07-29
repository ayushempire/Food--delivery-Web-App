import React from "react";

export default function () {
  return (
    <div>
      <div>
        <div
          className="card mt-3"
          style={{ width: "18rem", maxHeight: "360px" }}
        >
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
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
                (<option value="small">Small</option>), (
                <option value="half">Half</option>), (
                <option value="full">Full</option>)
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

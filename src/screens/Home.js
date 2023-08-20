import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import Carousal from "../components/Carousal";

export default function Header() {
  const [food_categories, setfood_Categories] = useState([]);
  const [food_items, setfood_items] = useState([]);

  const loadData = async () => {
    let responce = await fetch("http://localhost:5000/api/FoodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    responce = await responce.json();
    // console.log(responce);
    setfood_items(responce[0]);
    setfood_Categories(responce[1]);
  };

  //using hook
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousal />
      </div>
      <div className="container">
        {food_categories !== []
          ? food_categories.map((data) => {
              return (
                <div className="row mb-3">
                  <div key={data._id} className="fs-1 m-3 fw-bold text-success">
                    {data.CategoryName}
                  </div>
                  <hr />
                  {food_items !== [] ? (
                    food_items
                      .filter((item) => item.CategoryName === data.CategoryName)
                      .map((filterItems) => {
                        return (
                          <div
                            key={filterItems._id}
                            className="col-12 col-md-6 col-lg-3"
                          >
                            <Cards></Cards>
                          </div>
                        );
                      })
                  ) : (
                    <div>No such data</div>
                  )}
                </div>
              );
            })
          : ""}
        <Cards />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

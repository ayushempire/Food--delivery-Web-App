import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
// import Carousal from "../components/Carousal";

export default function Header() {
  //css
  let img_fit = {
    objectFit: "cover",
  };

  const [search, setsearch] = useState("");
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
        <div>
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
            style={img_fit}
          >
            <div className="carousel-inner " id="carousel">
              <div className="carousel-caption" style={{ zIndex: "10" }}>
                <div className="d-flex justify-content-center">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={search}
                    onChange={(e) => {
                      setsearch(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="carousel-item active">
                <img
                  src="https://source.unsplash.com/random/300×300/?burger"
                  className="d-block w-100"
                  alt="..."
                  style={({ filter: "brightness(50%)" }, { img_fit })}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://source.unsplash.com/random/300×300/?pizza"
                  className="d-block w-100"
                  alt="..."
                  style={({ filter: "brightness(50%)" }, { img_fit })}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://source.unsplash.com/random/300×300/?pastry"
                  className="d-block w-100"
                  alt="..."
                  style={({ filter: "brightness(50%)" }, { img_fit })}
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
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
                      .filter(
                        (item) =>
                          item.CategoryName === data.CategoryName &&
                          item.name.toLowerCase().includes(search.toLowerCase())
                      )
                      .map((filterItems) => {
                        return (
                          <div
                            key={filterItems._id}
                            className="col-12 col-md-6 col-lg-3"
                          >
                            <Cards
                              foodName={filterItems.name}
                              options={filterItems.options[0]}
                              imgSrc={filterItems.img}
                            ></Cards>
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
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

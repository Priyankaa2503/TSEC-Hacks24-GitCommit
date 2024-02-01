import React, { useState } from "react";
import Header from "../../components/Header";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import galleryImages from "./galleryImages";
import { data } from "./Data";

const Explore = () => {
  const [foods, setfoods] = useState(data);
  // const [foods, setfoods] = useState(data)
  const filterType = (category) => {
    setfoods(
      data.filter((item) => {
        return item.category == category;
      })
    );
  };

  const filterPrice = (price) => {
    setfoods(
      data.filter((item) => {
        return item.price == price;
      })
    );
  };
  return (
    <div>
      <Header />
      <div className="max-w-[1640px] m-auto px-4 py-12">
        <h1 className="text-orange-600 text-4xl font-bold text-center">
          EXPLORE
        </h1>
        <div className="flex flex-col lg:flex-row justify-between">
          <div>
            <p className="font-bold text-slate-600 ">Filter Type</p>
            <div className="flex justify-between flex-wrap m-1 ">
              <button
                onClick={() => setfoods(data)}
                className="border-2 px-4 rounded-2xl border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
              >
                All
              </button>
              <button
                onClick={() => filterType("Hall")}
                className="border-2 px-4 rounded-2xl border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
              >
                Hall
              </button>
              <button
                onClick={() => filterType("Kitchen")}
                className="border-2 px-4 rounded-2xl border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
              >
                Kitchen
              </button>
              <button
                onClick={() => filterType("Bedroom")}
                className="border-2 px-4 rounded-2xl border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
              >
                Bedroom
              </button>
              <button
                onClick={() => filterType("Bathroom")}
                className="border-2 px-4 rounded-2xl border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
              >
                Bathroom
              </button>
            </div>
          </div>
        </div>

        <ResponsiveMasonry
          className="mt-12"
          columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}
        >
          <Masonry gutter="1rem">
            {foods.map((item, index) => (
              <>
                <img className="masonry_img" src={item.image} alt={item.name} />
              </>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

export default Explore;

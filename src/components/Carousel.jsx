import React, { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Category from "./Category";

const Carousel = () => {
  const { fetchingData, data } = useContext(DataContext);

  useEffect(() => {
    fetchingData();
  }, []);

  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  
  };

  return (
    <section className="min-h-[calc(100vh-58px)] bg-[#030343] text-white flex items-center ">
      <div className="container w-full h-full ">
        <Slider {...settings} className="h-full">
          {data?.slice(0, 5).map((product) => (
            <div key={product.id} className="h-screen">
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 h-full px-5">
                {/* Left column (Text) */}
                <div className="space-y-4">
                  <p className="text-btnColor text-sm">Powering your world with the best in electronics</p>
                  <h2 className="text-4xl md:text-5xl font-semibold line-clamp-2">
                    {product.title}
                  </h2>
                  <p className="text-gray-300 line-clamp-4">
                    {product.description}
                  </p>
                  <button className="bg-gradient-to-r from-btnColor to-btnRight px-3 py-1 rounded-sm ">Shop Now</button>
                </div>

                {/* Right column (Image) */}
                <div className="flex justify-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-w-xs md:max-w-md object-cover rounded-full shadow-lg shadow-cyan-500/50"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>

          {/* catogory section  */}
          <Category/>

      </div>
    </section>
  );
};

export default Carousel;

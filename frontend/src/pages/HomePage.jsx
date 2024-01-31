import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import {image} from '../constant'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";


const HomePage = () => {
  console.log(image);
  return (
    <div className="flex w-full flex-col items-center justify-start py-2 min-h-screen">
      <Header />

      <main className="flex flex-1 w-full flex-col items-start justify-start  sm:mt-20 mt-20 background-gradient">
        <div className="flex">
          <div className="">
            <h1 className="mx-auto max-w-4xl font-display text-8xl font-bold tracking-normal text-gray-300 sm:text-8xl">
              Reinvent{" "}
              <p className="mt-6 text-8xl text-[#01BD57]">
                <span className="relative mt-20">Your Interiors</span>
              </p>{" "}
            </h1>
            {/* <div className="flex items-center justify-center my-28 rounded-lg"> */}

            <h2 className="mx-auto mt-12 max-w-xl text-xl sm:text-gray-300  text-gray-300 leading-7">
              The perfect balance between inner guiding you while still bringing
              out your vision essence of you.
            </h2>
          </div>
          <img src="Choosing.svg" alt="" className="w-[40%] h-[40%] ml-20" />
        </div>
        <div className="flex justify-between items-center w-full flex-col sm:mt-20 mt-6">
          <div className="flex flex-col space-y-10 mt-4 mb-16">
            <p className="mx-auto mb-4 max-w-4xl font-display text-4xl font-normal tracking-normal text-gray-300 sm:text-6xl">
              Explore our interior designs
            </p>
            <Carousel>
              <div>
                <img src="https://assets-global.website-files.com/64268d580a10a12e64fd4ab7/642eb36e53b7ee8a9e437dce_pr-06.jpg" />
              </div>
              <div>
                <img src="https://assets-global.website-files.com/64268d580a10a12e64fd4ab7/642eb36e53b7ee8a9e437dce_pr-06.jpg" />
              </div>
              <div>
                <img src="https://assets-global.website-files.com/64268d580a10a12e64fd4ab7/642eb3e1eba5745fcf9b12f9_pr-09.jpg" />
              </div>
            </Carousel>
            <div className="flex justify-center">
              <Link
                className="bg-[#01BD57] w-[300px] text-center text-xl rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-purple-500 transition"
                to="/login"
              >
               Get Onboard with us!
              </Link>
            </div>
          </div>
        </div>
      </main>
      {/* <img src={image} alt="" /> */}
    </div>
  );
};

export default HomePage;

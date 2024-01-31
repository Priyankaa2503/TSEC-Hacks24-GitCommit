import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import SquigglyLines from '../components/SquigglyLines';
import Footer from '../components/Footer';
import {image} from '../constant'

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

            <h2 className="mx-auto mt-12 max-w-xl text-xl sm:text-gray-200  text-gray-200 leading-7">
              The perfect balance between inner guiding you while still bringing
              out your vision essence of you.
            </h2>
          </div>
          <img src="Choosing.svg" alt="" className="w-[40%] h-[40%] ml-20" />
        </div>
        <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
          <div className="flex flex-col space-y-10 mt-4 mb-16">
            <h1 className="mx-auto mb-4 max-w-4xl font-display text-4xl font-bold tracking-normal text-gray-300 sm:text-6xl">
              Look at our samples.
            </h1>
            <div className="flex sm:space-x-8 sm:flex-row flex-col">
              <div>
                <h3 className="mb-1 font-medium text-lg">Original Room</h3>
                <img
                  alt="Original photo of a room with roomGPT.io"
                  src="/1.jpg"
                  className="w-full object-cover h-96 rounded-2xl"
                  width={400}
                  height={400}
                />
              </div>
              <div className="sm:mt-0 mt-8">
                <h3 className="mb-1 font-medium text-lg">Generated Room</h3>
                <img
                  alt="Generated photo of a room with roomGPT.io"
                  width={400}
                  height={400}
                  src="/1-new.jpg"
                  className="w-full object-cover h-96 rounded-2xl sm:mt-0 mt-2"
                />
              </div>
            </div>
            <Link
              className="bg-purple-600 rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-purple-500 transition"
              to="/login"
            >
              Renovate you room
            </Link>
          </div>
        </div>
      </main>
      {/* <img src={image} alt="" /> */}
      <Footer />
    </div>
  );
};

export default HomePage;

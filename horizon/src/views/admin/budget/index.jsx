import React, { useState } from "react";

import PieGraph from "./components/PieGraph";
import BarGraph from "./components/BarGraph";


const Budget = () => {
    const [activeButton, setActiveButton] = useState("monthly");

const handleButtonClick = (buttonType) => {
  setActiveButton(buttonType);
  // Handle other logic based on the button type if needed
};
  return (
    <div className="mt-10">
      <div>
        <div className="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-11">
          <div
            className="card card-border xl:col-span-7 2xl:col-span-8"
            role="presentation"
          >
            <div className="card-body">
              <div className="flex items-center justify-between">
                <h4 className="text-xl font-semibold">Cost Tracking</h4>
              </div>
              <div className="chartRef">
                <div style={{ minHeight: "395px" }}>
                  <BarGraph />
                </div>
              </div>
            </div>
          </div>
          <div
            className="card card-border xl:col-span-4 2xl:col-span-3"
            role="presentation"
          >
            <div className="card-body">
            <h4 className="text-xl font-semibold">Budget Allocated</h4>

              <div className="grid grid-cols-1">
                <div>
                  <div className="mt-6">
                    <div className="mb-6 flex justify-between">
                      <div className="flex gap-1">
                        <span
                          className="badge-dot mt-1.5"
                          // style="background-color: rgb(79, 70, 229);"
                        ></span>
                        <div>
                          <h6 className="text-sm font-bold">Crypto</h6>
                          <p>0.5832112 BTC</p>
                        </div>
                      </div>
                      <span className="self-end font-semibold">$15032</span>
                    </div>
                    <div className="mb-6 flex justify-between">
                      <div className="flex gap-1">
                        <span
                          className="badge-dot mt-1.5"
                          // style="background-color: rgb(59, 130, 246);"
                        ></span>
                        <div>
                          <h6 className="text-sm font-bold">Index</h6>
                          <p>1.7294746 ETH</p>
                        </div>
                      </div>
                      <span className="self-end font-semibold">$11246</span>
                    </div>
                    <div className="mb-6 flex justify-between">
                      <div className="flex gap-1">
                        <span
                          className="badge-dot mt-1.5"
                          // style="background-color: rgb(16, 185, 129);"
                        ></span>
                        <div>
                          <h6 className="text-sm font-bold">Innovation</h6>
                          <p>196.9766 SOL</p>
                        </div>
                      </div>
                      <span className="self-end font-semibold">$8273</span>
                    </div>
                  </div>
                </div>
                <div className="chartRef">
                  <div className=" mx-auto w-[250px]">
                    <PieGraph />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Budget;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";

function App() {
  return (
    <>
      <div className="text-4xl sm:text-4xl lg:text-8xl font-bold mb-8">
        <h1 className="text-[#CAA6F7]">
          Happy Birthday <span className="text-[#AAE0BF]">Hebbar</span>🥳🎈
        </h1>
        <p className="mt-2 text-sm  text-white font-normal ">Scroll down ⬇️</p>
      </div>
      <div className="grid-cols-1 grid gap-5 md:grid-cols-3 grid-flow-row ">
        <div className="flex justify-center mb-6">
          <div className=" w-72 sm:w-96 ">
            <video
              src="1.mp4"
              controls
              autoPlay
              className="rounded-[15px]"
            ></video>
            <p className="text-white mt-6 font-serif">Petrol Love ❤️</p>
          </div>
        </div>

        <div className="flex justify-center mb-6">
          <div className=" w-72 sm:w-96">
            <img src="/a2.jpg" alt="Vite logo" className="rounded-[15px]" />
          </div>
        </div>

        <div className="flex justify-center mb-6">
          <div className=" w-72 sm:w-96">
            <img src="/a3.jpg" alt="Vite logo" className="rounded-[15px]" />
            <p className="text-white mt-6 font-serif">
              📍happening now at deemahi
            </p>
          </div>
        </div>
        <div className="flex justify-center mb-6">
          <div className=" w-72 sm:w-96 ">
            <img src="/4.jpg" alt="Vite logo" className="rounded-[15px]" />
            <p className="text-white mt-6 font-serif">
              Handsome hunk🕶️👑
            </p>
          </div>
        </div>
        <div className="flex justify-center mb-6">
          <div className=" w-72 sm:w-96 ">
            <video src="2.mp4" controls></video>
            <p className="text-white mt-6 font-serif">
              Hebbar's party !🎉
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className=" w-72 sm:w-96">
            <img src="/a1.jpg" alt="Vite logo" className="rounded-[15px]" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

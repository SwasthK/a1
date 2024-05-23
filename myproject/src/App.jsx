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
      </div>
      <div className="grid-cols-2 grid gap-5 md:grid-cols-4">
      <div className="flex justify-center">
        <div className=" w-72 sm:w-96">
          <img src="/a1.jpg" alt="Vite logo" className="border-2 rounded-[15px]" />
        </div>
      </div>
      <div className="flex justify-center mb-6">
        <div className=" w-72 sm:w-96">
          <img src="/a2.jpg" alt="Vite logo" className="border-2 rounded-[15px]" />
        </div>
      </div>
      <div className="flex justify-center mb-6">
        <div className=" w-72 sm:w-96">
          <img src="/a3.jpg" alt="Vite logo" className="border-2 rounded-[15px]" />
        </div>
      </div>
      <div className="flex justify-center mb-6">
        <div className=" w-72 sm:w-96 ">
          <img src="/4.jpg" alt="Vite logo" className="border-2 rounded-[15px]" />
        </div>
      </div>
      </div>
    </>
  );
}

export default App;

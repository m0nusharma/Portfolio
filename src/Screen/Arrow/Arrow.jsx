import React from "react";

const Arrow = () => {
  return (
    <div className=" flex justify-center items-center flex-col">
      <div className="border-gray-400  h-[40px] w-[40px]  rounded-full flex  justify-center items-center pointer">
      <i className="fa-solid fa-arrow-up "></i>
      </div>
      <div className="border-gray-500 border-1 h-[40px] w-[40px]  rounded-full flex  justify-center items-center rotate-180 pointer">
      <i className="fa-solid fa-arrow-up "></i>
      </div>
    </div>
  );
};

export default Arrow;

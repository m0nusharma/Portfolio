import React from "react";
import MyCard from "../Card/MyCard";
import CardOne from "../../assets/cardd img.jpg";
import CardTwo from "../../assets/cardtwo.jpg";
import Info from "../Info/Info";
import Work from "../Works/Work";

const Dashboard = () => {
  return (
    
    <div className="container">
    <div className="row h-screen overflow-hidden ">
    <img src='/src/assets/dextop.svg' className='h-80vh  absolute right-0 top-0  z-[-1] '/>
      <div className="detailsSetting col-lg-4 p-0 flex justify-center items-center relative ">
        <Info />
      </div>

      <div className="col-lg-6 p-0 flex justify-center items-center relative ">
        <MyCard
          className="rotate-[-2deg]  absolute top-[50%] left-[45%] transform -translate-x-1/2 -translate-y-1/2 "
          MyLocation="Haryana, Panchkula"
          location="Location"
          img={CardTwo}
          userID="@_monu"
          user="Monu Sharma"
          logo="M."
        />
        <MyCard
          className="rotate-[12deg] absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
          MyLocation=" Haryana, Panchkula"
          location="Location "
          img={CardOne}
          userID="@_monu"
          user="Monu Sharma"
          logo="M."
        />
      </div>
      <div className="works col-lg-2 p-0 flex flex-col gap-3 justify-center flex-start ">
        <Work Language="React" project="4+"/>
        <Work Language="HTML" project="5"/>
      </div>
    </div>
    </div>


  );
};

export default Dashboard;

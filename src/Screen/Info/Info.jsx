import React from "react";
import insta from "../../assets/instagram.png";
import github from "../../assets/github.png";

const Info = () => {
  return (
    <div className="">
    <div className="">
      <p className=""> Monu sharma</p>
      <h1 className="mainHeading text-6xl ">
        {" "}
        UI UX <b> Designer</b> <br /> and <b>Developer.</b>{" "}
      </h1>
      <p className="mainDetails text-sm">
        Innovative UI/UX Designer and Developer <br /> creating intuitive,
        engaging digital experiences <br /> that blend seamless functionality
        with stunning visuals.
      </p>
      </div>
      <div className=" flex gap-3 items-center ">
        <h5 className=" m-0">
          <b>Active on</b>{" "}
        </h5>
        <span className="flex gap-3 mb-3">
          {" "}
          <img src={insta} className="h-[30px] cursor-pointer" />
          <img src={github} className="h-[30px] cursor-pointer" />
        </span>
        <span> </span>
      </div>
    </div>
  );
};

export default Info;

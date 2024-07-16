import React from "react";
import Arrow from "../Arrow/Arrow";
import ClosedBook from "../ClosedBook/ClosedBook";
import Heading from "../Heading/Heading";
import Description from "../Description/Description";
import Button from "../Button/Button";
import DescriptionTwo from "../DescriptionTwo/DescriptionTwo";

const ProjectPageTwo = () => {
  return (
    <div
      className="screen_two overflow-hidden bg-[#F0EEE2] "
      id="DetailsPageTwo"
    >
      <div className=" row pt-5 px-5 ">
        <div className="col-lg-5 flex">
          <div>
            <ClosedBook className="mQuarySizeBook h-[300px] w-[220px] inline-block" />
          </div>
          <div>
            {" "}
            <h1 className="projectNameHeading text-6xl fw-bold text-gray-700">
              Harry Potter : Half Blood Prince
            </h1>
            <h4>JK Rowling</h4>
          </div>
          <br />
        </div>
        <div className="col-lg-7">
          <Heading />
        </div>
      </div>
      <div className="DetailsPageTwo row  pt-5 bg-white mx-5 rounded">
        <div className="col-lg-6 ">
          {" "}
          <Description className="p-5" />{" "}
        </div>
        <div className="col-lg-6  ">
          {" "}
          <Button />
          <hr />
          <DescriptionTwo />
        </div>
      </div>
    </div>
  );
};

export default ProjectPageTwo;

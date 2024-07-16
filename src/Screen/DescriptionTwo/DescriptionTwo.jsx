import React from "react";

const DescriptionTwo = ({className}) => {
  return (
    <div className={`${className}`}>
      <div className="">
        {" "}
        <h5> Editors</h5> <p>VS code</p>
      </div>
      <div className="">
        {" "}
        <h5> Language</h5> <p> React, tailwind</p>
      </div>
      <div className="">
        {" "}
        <h5>Paperback</h5> <p> digital</p>
      </div>
    </div>
  );
};

export default DescriptionTwo;

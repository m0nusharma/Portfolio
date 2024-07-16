import React from "react";

const Description = ({className}) => {
  return (
    <div className={`${className}`}>
      <div className="">
        <h5 className="fw-bold">Description</h5>
        <p className="text-sm ">
          A UI Developer, or User Interface Developer, specializes in crafting
          visually appealing and user-friendly interfaces for websites and
          applications. They blend technical expertise in HTML, CSS, and
          JavaScript with a keen eye for design, ensuring seamless user
          experiences. Collaborating closely with UX designers and backend
          developers, UI Developers translate wireframes and mockups into
          interactive, responsive interfaces. They stay updated with the latest
          design trends and technologies, ensuring cross-browser compatibility
          and performance optimization. <br />
          <br /> Their role is crucial in enhancing user engagement and
          satisfaction by creating intuitive, accessible, and aesthetically
          pleasing digital products.
        </p>
      </div>{" "}
      <br />
      <div className=" flex  gap-3 ">
        <img
          src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png "
          className="h-[40px] w-[40px] rounded-full "
        />
        <span className="">
          <h5 className="fw-bold m-0">Monu Sharma</h5>
          <p className="text-xs">
            {" "}
            Their role is crucial in enhancing user engagement and satisfaction
            by creating <br /> intuitive, accessible, and aesthetically pleasing
            digital products.
          </p>
        </span>
      </div>
    </div>
  );
};

export default Description;

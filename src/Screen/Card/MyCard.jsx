import React from "react";

const MyCard = ({
  MyLocation,
  location,
  img,
  userID,
  user,
  logo,
  className,
}) => {
  return (
    <div
      className={`${className} h-[350px] w-[250px] border-1  bg-white border-black pt-3 pb-3 pr-2 pl-2`}
    >
      <div className="flex justify-between">
        <span className=" flex  items-center gap-2">
          <h5 className="m-0">
            <b>{logo}</b>
          </h5>
          <p className="m-0">{user}</p>
        </span>
        <span className="fs-xs">
          <p className="m-0 text-xs">{userID}</p>
        </span>
      </div>
      <img src={img} className="mt-2 h-[220px]" />
      <p className="m-0 mt-2">
        <b>{location}</b>
      </p>

      <p className="m-0 text-xs">{MyLocation}</p>
    </div>
  );
};

export default MyCard;

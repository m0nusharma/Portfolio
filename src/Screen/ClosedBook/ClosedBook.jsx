import React from "react";

const ClosedBook = ({ className }) => {
  return (
    <div className="flex gap-3">
      <div
        className={`Closed-book ${className}  bg-red-500  rounded-r-lg drop-shadow-2xl cursor-pointer  bg-[url('https://cdn.dribbble.com/userupload/15008269/file/original-88b54acd34eee845760009ad6748e97e.jpg?resize=1024x768')] bg-cover bg-no-repeat bg-center`}
      ></div>
      <div>
      </div>
    </div>
  );
};

export default ClosedBook;

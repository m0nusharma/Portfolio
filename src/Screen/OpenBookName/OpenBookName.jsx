import React from "react";
import BookShow from "../BookShow/BookShow";
import ClosedBook from "../ClosedBook/ClosedBook";

const OpenBookName = () => {
  return (
    <div className="flex gap-2 mb-4">
      <ClosedBook className="h-[100px] w-[60px] "/>
      <h2 className=" fw-bold inline-block ">
        The Chamber of <br /> Secrets
      </h2>
     
    </div>
  );
};


export default OpenBookName;

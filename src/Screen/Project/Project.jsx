import React from "react";
import FileText from "../FileText/FileText";
import Button from "../Button/Button";
import ProjectFile from "../ProjectFile/ProjectFile";
import book from "../../assets/book.png";
import Book from "../Book/Book";
import OpenBookName from "../OpenBookName/OpenBookName";
import Description from "../Description/Description";

const Project = () => {
  return (
    <div className="screen_one container ">
      <div className=" row overflow-hidden ">
        <div className="col-lg-8  p-5 ">
          <FileText />
          <Button />
          <ProjectFile className="" />
        </div>
        <div
           id="DetailsPageOne" className="   {
            col-lg-4 pt-5"
        >
          <OpenBookName />
          <Description />
        </div>
      </div>
    </div>
  );
};

export default Project;

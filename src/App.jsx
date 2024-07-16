import { useState } from "react";
import "./App.css";
import Dashboard from "./Screen/DashBoad/Dashboard";
import Sidebar from "./Components/Sidebar/Sidebar";
import Project from "./Screen/Project/Project";
import ProjectPageTwo from "./Screen/ProjectPageTwo/ProjectPageTwo";

function App() {
  return (
    <div className="">
      <Sidebar />
      <Dashboard />
      <Project />
      <ProjectPageTwo />
      
    </div>
  );
}

export default App;

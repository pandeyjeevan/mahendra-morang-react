import { Outlet, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";

const AppLayouts = () => {
  return (
    <div>
      <Navbar />
      <h1>This is App layout</h1>
      <Outlet />
    </div>
  );
};

export default AppLayouts;

import { Outlet, Route, Routes } from "react-router-dom";

const DashhboardLayouts = () => {
  return (
    <div>
      <h1>This is Admin page</h1>
      <Outlet />
    </div>
  );
};

export default DashhboardLayouts;

import Navbar_ from "../Components/Navbar";
import { Outlet } from "react-router-dom";

const Rootlayout = () => {
  return (
    <>
      <Navbar_ />

      <Outlet />
    </>
  );
};

export default Rootlayout;

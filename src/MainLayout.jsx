import { Outlet } from "react-router-dom";
import { NavbarDefault } from "./components/navbar/navbar";

const MainLayout = () => {
  return (
    <>
      <div className="">
        <NavbarDefault></NavbarDefault>
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default MainLayout;

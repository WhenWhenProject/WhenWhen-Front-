import React from "react";
import { Outlet } from "react-router-dom";
import LogoutBtn from "../../components/sign/LogoutBtn";

const Main = () => {
  return (
    <div>
      <LogoutBtn />
      <Outlet />
    </div>
  );
};

export default Main;

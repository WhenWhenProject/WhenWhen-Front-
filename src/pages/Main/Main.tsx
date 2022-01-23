import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGetUser } from "../../hooks/sign/useGetUser";

const Main = () => {
  const navigate = useNavigate();
  const getUser = useGetUser();
  useEffect(() => {
    if (!getUser.login) navigate("/sign");
  });
  return <div>main</div>;
};

export default Main;

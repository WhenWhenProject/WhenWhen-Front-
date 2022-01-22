import React from "react";
import { useNavigate } from "react-router-dom";
import { sessionLogin, useGetUser } from "../../hooks/sign/useGetUser";

const Sign = () => {
  const navigate = useNavigate();
  const getUser = useGetUser();
  const handleClickLogin = () => {
    sessionLogin("login");
    if (getUser) navigate("/");
  };
  return <button onClick={handleClickLogin}>kakao Login</button>;
};

export default Sign;

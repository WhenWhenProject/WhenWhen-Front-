import React from "react";
import { useNavigate } from "react-router-dom";
import { kakaoAuth } from "../../modules/kakaoAuth/kakaoAuth";

const Main = () => {
  const navigate = useNavigate();

  const handleClickLogout = async () => {
    kakaoAuth.logout(() => {
      navigate("/");
      window.location.reload();
    });
  };

  return <button onClick={handleClickLogout}>Logout</button>;
};

export default Main;

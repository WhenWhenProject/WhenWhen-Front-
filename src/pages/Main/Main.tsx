import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetUser } from "../../hooks/sign/useGetUser";
import { kakaoAuth } from "../../modules/kakaoAuth/kakaoAuth";
import { logoutCheck } from "../../modules/store/Login";

const Main = () => {
  const navigate = useNavigate();
  const getUser = useGetUser();
  const dispatch = useDispatch();

  const handleClickLogout = async () => {
    try {
      if (!getUser.isLogin) return;
      kakaoAuth.logout(() => {
        dispatch(logoutCheck());
        navigate("/");
      });
    } catch (e) {
      console.log(e);
    }
  };

  return <button onClick={handleClickLogout}>Logout</button>;
};

export default Main;

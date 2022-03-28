import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import api from "../../modules/api/api";
import { API_LOGIN } from "../../modules/api/keyFactory";
import { LoginSlice } from "../../modules/store/Login";

const id = "abc123";
const pw = "1234";

const GoogleLoginBtn = () => {
  const dispatch = useDispatch();
  const handleLogin = async () => {
    // const { getLogin } = LoginSlice.actions;
    const res = api.POST({
      url: API_LOGIN,
      data: { username: id, password: pw },
    });
    // dispatch(getLogin({ username: id, password: pw }));
  };
  return (
    <StyledBtn onClick={handleLogin}>
      <img className="login-img" src="/img/Google.png" alt="google" />
      <div className="login-text">로그인하기</div>
    </StyledBtn>
  );
};

export default GoogleLoginBtn;

const StyledBtn = styled.button`
  position: relative;
  display: flex;
  width: 384px;
  height: 60px;
  cursor: pointer;
  border: none;
  border: 2px solid rgba(0, 0, 0, 0.54);
  background-color: white;
  border-radius: 5px;
  align-items: center;
  .login-text {
    color: rgba(0, 0, 0, 0.54);
  }
  margin-bottom: 10px;
`;

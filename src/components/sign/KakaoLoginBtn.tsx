import axios from "axios";
import React from "react";
import styled from "styled-components";
import handleLogin from "../../modules/api/handleLogin";
import { API_KAKAO_LOGIN } from "../../modules/api/keyFactory";

const KakaoLoginBtn = () => {
  return (
    <StyledBtn onClick={() => handleLogin("kakao")}>카카오로 로그인</StyledBtn>
  );
};

export default KakaoLoginBtn;

const StyledBtn = styled.button`
  width: 200px;
  cursor: pointer;
  margin-bottom: 10px;
`;

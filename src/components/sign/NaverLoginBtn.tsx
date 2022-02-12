import React from "react";
import styled from "styled-components";
import handleLogin from "../../modules/api/handleLogin";

const NaverLoginBtn = () => {
  return (
    <StyledBtn onClick={() => handleLogin("naver")}>네이버로 로그인</StyledBtn>
  );
};

export default NaverLoginBtn;

const StyledBtn = styled.button`
  width: 200px;
  cursor: pointer;
`;

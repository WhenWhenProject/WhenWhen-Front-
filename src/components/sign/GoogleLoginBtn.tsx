import React from "react";
import styled from "styled-components";
import handleLogin from "../../modules/api/handleLogin";

const GoogleLoginBtn = () => {
  return (
    <StyledBtn onClick={() => handleLogin("google")}>구글 로그인</StyledBtn>
  );
};

export default GoogleLoginBtn;

const StyledBtn = styled.button`
  width: 200px;
  cursor: pointer;
  margin-bottom: 10px;
`;
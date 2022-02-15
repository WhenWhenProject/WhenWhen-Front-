import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import LogoutBtn from "../../components/sign/LogoutBtn";

const Main = () => {
  return (
    <StyledWrapper>
      <LogoutBtn />
    </StyledWrapper>
  );
};

export default Main;

const StyledWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

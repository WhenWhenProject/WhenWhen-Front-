import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import KakaoLoginBtn from "../../components/sign/KakaoLoginBtn";
import { useGetUser } from "../../hooks/sign/useGetUser";

const Sign = () => {
  const navigate = useNavigate();
  const getUser = useGetUser();
  useEffect(() => {
    if (getUser.login) navigate("/");
  });
  return (
    <StyledWrapper>
      <KakaoLoginBtn></KakaoLoginBtn>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Sign;

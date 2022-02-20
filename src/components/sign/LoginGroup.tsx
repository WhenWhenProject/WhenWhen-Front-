import React from 'react';
import styled from 'styled-components';
import GoogleLoginBtn from './GoogleLoginBtn';
import KakaoLoginBtn from './KakaoLoginBtn';
import NaverLoginBtn from './NaverLoginBtn';

const LoginGroup = () => {
  return (
    <StyledWrapper>
      <GoogleLoginBtn />
      <KakaoLoginBtn />
      <NaverLoginBtn />
    </StyledWrapper>
  );
};

export default LoginGroup;

const StyledWrapper = styled.div``;

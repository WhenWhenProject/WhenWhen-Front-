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

const StyledWrapper = styled.div`
  position: absolute;
  bottom: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /** 모든 로그인에 공통 적용 */

  .login-img {
    position: absolute;
    left: 16px;
  }
  .login-text {
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
  }
`;

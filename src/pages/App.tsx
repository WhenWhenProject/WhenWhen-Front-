import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Main/Main';
import Sign from './Sign/Sign';
import KakaoRedirectLogin from './Sign/kakao/KakaoRedirectLogin';
import GoogleRedirectLogin from './Sign/Google/GoogleRedirectLogin';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules/store';
import { useEffect } from 'react';
import { loginCheck } from '../modules/store/Login';
import Test from './Test';
import { useGetUser } from '../hooks/sign/useGetUser';

function App() {
  const dispatch = useDispatch();
  const isLogin = useSelector((state: RootState) => state.login.isLogin);
  const token = localStorage.getItem('access-token');
  const getUser = useGetUser(token);

  useEffect(() => {
    if (!getUser.isLogin) {
      dispatch(loginCheck());
    }
  }, []);

  return (
    <BrowserRouter>
      <StyledWrapper>
        <Routes>
          {isLogin ? (
            <Route path="/" element={<Main />} />
          ) : (
            <Route path="/" element={<Sign />} />
          )}
          <Route path="/test" element={<Test />} />
          <Route path="/sign/kakao/callback" element={<KakaoRedirectLogin />} />
          <Route
            path="/sign/google/callback"
            element={<GoogleRedirectLogin />}
          />
        </Routes>
      </StyledWrapper>
    </BrowserRouter>
  );
}

const StyledWrapper = styled.div`
  min-height: 100vh;
  background-color: #d6d6d6;
`;

export default App;

import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Main/Main';
import Sign from './Sign/Sign';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules/store';
import { useEffect } from 'react';
import { loginCheck } from '../modules/store/Login';
import Test from './Test';
import { useGetUser } from '../hooks/sign/useGetUser';
import NewSchedule from './NewSchedule/NewSchedule';
import MyPage from './MyPage/MyPage';
import ScheduleForm from './ScheduleForm/ScheduleForm';
import Page404 from './Page404';
import ScheduleResult from './ScheduleResult/ScheduleResult';

function App() {
  const dispatch = useDispatch();
  const isLogin = useSelector((state: RootState) => state.login.isLogin);
  const token = localStorage.getItem('access-token');
  const getUser = useGetUser(token);

  useEffect(() => {
    if (!getUser.isLogin && getUser.token) {
      dispatch(loginCheck());
    }
  }, []);

  return (
    <BrowserRouter>
      <StyledWrapper>
        <Routes>
          {isLogin ? (
            <Route path="/" element={<Main />}>
              <Route path="new-schedule" element={<NewSchedule />} />
              <Route path="mypage" element={<MyPage />} />
              <Route path="schedule-form" element={<ScheduleForm />} />
              <Route path="schedule-result" element={<ScheduleResult />} />
            </Route>
          ) : (
            <Route path="/" element={<Sign />} />
          )}
          <Route path="/test" element={<Test />} />
          <Route path="*" element={<Page404 />} />
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

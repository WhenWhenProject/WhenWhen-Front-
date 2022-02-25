import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Main/Main';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules/store';
import { useEffect } from 'react';
import { loginCheck } from '../modules/store/Login';
import { useGetUser } from '../hooks/sign/useGetUser';
import NewSchedule from './NewSchedule/NewSchedule';
import MyPage from './MyPage/MyPage';
import ScheduleForm from './ScheduleForm/ScheduleForm';
import Page404 from './Page404';
import ScheduleResult from './ScheduleResult/ScheduleResult';
import NavigationBar from '../components/NavigationBar';
import EventPage from './Event/EventPage';
import EventComponent from '../components/event/EventComponent';
import PreResult from './PreResult/PreResult';

function App() {
  const dispatch = useDispatch();
  const isLogin = useSelector((state: RootState) => state.login.isLogin);
  const token = localStorage.getItem('access-token');
  const getUser = useGetUser(token);

  useEffect(() => {
    if (!getUser.isLogin && getUser.token) {
      dispatch(loginCheck());
    }
  }, [isLogin]);

  return (
    <BrowserRouter>
      <StyledWrapper>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Main />} />
          {!isLogin && (
            <>
              <Route path="schedule/new" element={<NewSchedule />} />
              <Route path="mypage" element={<MyPage />} />
              <Route path="schedule/form" element={<ScheduleForm />} />
              <Route path="schedule/result" element={<ScheduleResult />} />
              <Route path="schedule/pre" element={<PreResult />} />
              <Route path="event" element={<EventPage />}>
                <Route path=":type" element={<EventComponent />}></Route>
              </Route>
            </>
          )}
          <Route path="*" element={<Page404 />} />
        </Routes>
      </StyledWrapper>
    </BrowserRouter>
  );
}

export default App;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

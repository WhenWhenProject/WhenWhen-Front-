import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Main/Main';
import NewSchedule from './NewSchedule/NewSchedule';
import MyPage from './MyPage/MyPage';
import ScheduleForm from './ScheduleForm/ScheduleForm';
import Page404 from './Page404';
import ScheduleResult from './ScheduleResult/ScheduleResult';
import NavigationBar from '../components/NavigationBar';
import EventPage from './Event/EventPage';
import EventComponent from '../components/event/EventComponent';
import PreResult from './PreResult/PreResult';
import Sign from './Sign/Sign';

function App() {
  return (
    <BrowserRouter>
      <StyledWrapper>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Main />} />
          {false && (
            <>
              <Route path="schedule/new" element={<NewSchedule />} />
              <Route path="mypage" element={<MyPage />} />
              <Route path="schedule/form" element={<ScheduleForm />} />
              <Route path="schedule/result" element={<ScheduleResult />} />
              <Route path="schedule/pre" element={<PreResult />} />
              <Route path="event" element={<EventPage />}>
                <Route path=":type" element={<EventComponent />}></Route>
              </Route>
              <Route path="/oauth/redirect" element={<Sign />} />
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

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useGetUser } from '../../hooks/sign/useGetUser';
import axios from 'axios';
import LogoutBtn from '../../components/sign/LogoutBtn';

const Main = () => {
  return (
    <div>
      <LogoutBtn />
    </div>
  );
};

export default Main;

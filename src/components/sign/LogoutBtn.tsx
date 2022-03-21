import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useGetUser } from '../../hooks/sign/useGetUser';

export default function LogoutBtn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem('access_token');
  const getUser = useGetUser(token);

  const logoutRedirect = () => {
    navigate('/');
  };

  const handleClickLogout = async () => {
    const social = localStorage.getItem('social');
    try {
      if (!getUser.isLogin) return;
      switch (social) {
        default:
          logoutRedirect();
          break;
      }
    } catch (e) {
      console.log(e);
    }
  };

  return <button onClick={handleClickLogout}>Logout</button>;
}

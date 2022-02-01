import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useGetUser } from '../../hooks/sign/useGetUser';
import { kakaoAuth } from '../../modules/kakaoAuth/kakaoAuth';
import { logoutCheck } from '../../modules/store/Login';
import qs from 'qs';
import axios from 'axios';
import { API_GOOGLE_LOGOUT } from '../../modules/api/keyFactory';

export default function LogoutBtn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem('access_token');
  const getUser = useGetUser(token);

  const logoutRedirect = () => {
    dispatch(logoutCheck());
    navigate('/');
  };

  const handleClickLogout = async () => {
    const social = localStorage.getItem('social');
    try {
      if (!getUser.isLogin) return;
      switch (social) {
        case 'kakao':
          kakaoAuth.logout(() => {
            dispatch(logoutCheck());
            navigate('/');
          });
          break;
        case 'google':
          axios({
            method: 'post',
            url: API_GOOGLE_LOGOUT,
            data: qs.stringify({
              type: 'hidden',
              name: 'token',
              value: token,
            }),
            headers: {
              'content-type': 'application/x-www-form-urlencoded',
            },
          });
          logoutRedirect();
          break;
      }
    } catch (e) {
      console.log(e);
    }
  };

  return <button onClick={handleClickLogout}>Logout</button>;
}

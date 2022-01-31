import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginCheck } from '../../../modules/store/Login';
import { API_GOOGLE_REDIRECT_LOGIN } from '../../../modules/api/keyFactory';
import { setLogin } from '../../../hooks/sign/useGetUser';

export default function GoogleRedirectLogin(res: any) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = new URLSearchParams(window.location.hash);
  const access_token = JSON.stringify(params.get('#access_token')) as string;

  setLogin(access_token, 'google');

  const googleRequest = async () => {
    const google_access_token = JSON.parse(
      localStorage.getItem('access_token') as string
    );
    try {
      const response = await axios.get(API_GOOGLE_REDIRECT_LOGIN, {
        headers: {
          Authorization: `Bearer ${google_access_token}`,
        },
      });
      dispatch(loginCheck());
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    googleRequest();
  }, []);

  return <div>Google Redirect</div>;
}

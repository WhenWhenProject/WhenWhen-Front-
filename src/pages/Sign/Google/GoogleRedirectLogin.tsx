import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginCheck } from '../../../modules/store/Login';
import { API_GOOGLE_REDIRECT_LOGIN } from '../../../modules/api/keyFactory';

export default function GoogleRedirectLogin(res: any) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = new URLSearchParams(window.location.hash)!;
  const access_token = params.get('#access_token') as string;
  console.log(access_token);

  localStorage.setItem('oauth2-google-params', JSON.stringify(access_token));

  const googleRequest = async () => {
    var access_token = JSON.parse(
      localStorage.getItem('oauth2-google-params') as string
    );
    try {
      const response = await axios.get(API_GOOGLE_REDIRECT_LOGIN, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      console.log(response);
      dispatch(loginCheck());
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    googleRequest();
  }, []);

  return <div>Hello</div>;
}

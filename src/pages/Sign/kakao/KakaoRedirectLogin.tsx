import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLogin } from '../../../hooks/sign/useGetUser';
import { API_KAKAO_LOGIN } from '../../../modules/api/keyFactory';
import envConfig from '../../../modules/Envkey';
import { loginCheck } from '../../../modules/store/Login';
import { qs } from '../../../modules/util/qs';

interface IbodyData {
  grant_type: string;
  client_id: string;
  redirect_uri: string;
  code: string;
  [prop: string]: any;
}

interface ItokenData {
  token_type: string;
  access_token: string;
  expires_in: number;
  refresh_token: string;
  refresh_token_expires_in: number;
}

const RedirectLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const code = new URL(window.location.href)!.searchParams!.get(
    'code'
  ) as string;

  const bodyData: IbodyData = {
    grant_type: 'authorization_code',
    client_id: envConfig!.kakaoKey,
    redirect_uri: envConfig!.kakaoRedirect,
    code,
  };

  const queryStringBody = qs.stringURL(bodyData).substring(1);

  const getKakaoToken = async () => {
    try {
      const { data } = await axios.post(API_KAKAO_LOGIN, queryStringBody);
      setLogin(data.access_token, 'kakao');
      dispatch(loginCheck());
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getKakaoToken();
  }, []);

  return <div>로딩중</div>;
};

export default RedirectLogin;

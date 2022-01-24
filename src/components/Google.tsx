import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { GoogleLogout } from 'react-google-login';

const CLIENT_ID =
  '910904005629-ars8v9ec769nph31o0f5705h1oruj4je.apps.googleusercontent.com';

type UserInfo = {
  id: string;
  email: string;
  name: string;
  token: string;
};

export default function Google(props: any) {
  // 유저 정보 리덕스로 바꿀 예정
  const [userInfo, setUserInfo] = useState({
    id: '',
    email: '',
    name: '',
    token: '',
  });
  const [isLogin, setIsLogin] = useState(false);

  const loginSuccess = (res: any) => {
    const { googleId, name, email } = res.profileObj;
    const { token } = res.tokenObj;

    setUserInfo({
      id: googleId,
      email: email,
      name: name,
      token: token,
    });
    setIsLogin(true);
    console.log(userInfo);
  };

  const loginFailure = (error: any) => {
    console.log(error);
  };

  const logOutSuccess = () => {
    setIsLogin(false);
    console.log('logout');
  };

  return (
    <div>
      <GoogleLogin
        clientId={CLIENT_ID}
        buttonText="Google"
        onSuccess={loginSuccess}
        onFailure={loginFailure}
      />

      <GoogleLogout
        clientId={CLIENT_ID}
        buttonText="Logout"
        onLogoutSuccess={logOutSuccess}
      ></GoogleLogout>
    </div>
  );
}

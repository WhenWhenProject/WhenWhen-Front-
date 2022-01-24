import React from 'react';
import { useNavigate } from 'react-router-dom';
import { sessionLogin, useGetUser } from '../../hooks/sign/useGetUser';
import Google from '../../components/Google';

const Sign = () => {
  const navigate = useNavigate();
  const getUser = useGetUser();
  const handleClickLogin = () => {
    sessionLogin('login');
    if (getUser) navigate('/');
  };
  return (
    <div>
      <button onClick={handleClickLogin}>kakao Login</button>
      <Google />
    </div>
  );
};

export default Sign;

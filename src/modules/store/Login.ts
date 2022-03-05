const LOGINCHECK = 'logincheck';
const LOGOUTCHECK = 'logoutcheck';

export const loginCheck = () => ({ type: LOGINCHECK });
export const logoutCheck = () => ({ type: LOGOUTCHECK });

const initialState = { isLogin: false };

export const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGINCHECK:
      return { ...state, isLogin: true };
    case LOGOUTCHECK:
      return { ...state, isLogin: false };
    default:
      return state;
  }
};

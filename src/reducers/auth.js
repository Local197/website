import { Cookies } from 'react-cookie';

const initialState = {
  user: null,
  state: 'signed_out'
};

export function getAuth(state = initialState, action = {}) {
  switch (action.type) {
  case 'USER_DATA_RECEIVED': {
    return {
      ...state,
      ...action.payload
    };
  }
  default:
    return state;
  }
}

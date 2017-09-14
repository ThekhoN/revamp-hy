// action-types
const AUTH_USER = 'AUTH_USER';

// actions
export const authUser = payload => ({
  type: AUTH_USER,
  payload
});

// reducer
export const initialStateUserAuth = {
  authenticated: true
};

const userAuth = (state = initialStateUserAuth, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {...state, authenticated: action.payload};
    default:
      return state;
  }
};

export default userAuth;

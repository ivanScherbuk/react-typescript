import { UserAction, UserActionTypes, UserState } from "../../types/user";

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
  page: 1,
  limit: 1,
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS: 
      return { ...state, loading: true};
    case UserActionTypes.FETCH_USERS_SUCCESS: 
      return { ...state, loading: false, users: action.payload };
    case UserActionTypes.FETCH_USERS_ERROR: 
      return { ...state, loading: false, error: action.payload };
    case UserActionTypes.SET_USERS_PAGE: 
      return { ...state, page: action.payload };
    default: 
      return state;
  }
}
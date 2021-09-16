import axios from "axios";
import { Dispatch } from "redux";
import { UserAction, UserActionTypes } from "../../types/user";

export const fetchUsers = (page = 1, limit = 1) => { 
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS });
      const response = await axios.get(`http://localhost:5000/employees?limit=${limit}&page=${page}`);
      dispatch({ type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: 'Ooops, something went wrong...',
      })
    }
  }
}

export const setUsersPage = (page: number) => { 
  return { type: UserActionTypes.SET_USERS_PAGE, payload: page };
}
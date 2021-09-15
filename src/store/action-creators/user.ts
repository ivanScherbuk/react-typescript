import axios from "axios";
import { Dispatch } from "redux"
import { UserAction, UserActionTypes } from "../../types/todo"

export const fetchUsers = () => { 
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS });
      const response = await axios.get('http://localhost:5000/employees');
      dispatch({ type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: 'Ooops, something went wrong...',
      })
    }
  }
}
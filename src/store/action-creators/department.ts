import axios from "axios";
import { Dispatch } from "redux";
import { DepartmentAction, DepartmentActionTypes } from "../../types/department";

export const fetchDepartments = () => { 
  return async (dispatch: Dispatch<DepartmentAction>) => {
    try {
      dispatch({ type: DepartmentActionTypes.FETCH_DEPARTMENTS });
      const response = await axios.get(`http://localhost:5000/departments`);
      dispatch({ type: DepartmentActionTypes.FETCH_DEPARTMENTS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({
        type: DepartmentActionTypes.FETCH_DEPARTMENTS_ERROR,
        payload: 'Ooops, something went wrong...',
      })
    }
  }
}
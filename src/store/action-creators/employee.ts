import { Employee, EmployeeAction, EmployeeActionTypes } from '../../types/employee';
import axios from "axios";
import { Dispatch } from "redux";

export const fetchEmployees = (page = 1, limit = 10) => { 
  return async (dispatch: Dispatch<EmployeeAction>) => {
    try {
      dispatch({ type: EmployeeActionTypes.FETCH_EMPLOYEES });
      const response = await axios.get(`http://localhost:5000/employees?limit=${limit}&page=${page}`);
      dispatch({ type: EmployeeActionTypes.FETCH_EMPLOYEES_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({
        type: EmployeeActionTypes.FETCH_EMPLOYEES_ERROR,
        payload: 'Ooops, something went wrong...',
      })
    }
  }
}

export const deleteEmployee = (id: string) => { 
  return async (dispatch: Dispatch<EmployeeAction>) => {
    try {
      dispatch({ type: EmployeeActionTypes.FETCH_EMPLOYEES });
      const response = await axios.delete(`http://localhost:5000/employees/${id}`);
      dispatch({ type: EmployeeActionTypes.FETCH_EMPLOYEES_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({
        type: EmployeeActionTypes.FETCH_EMPLOYEES_ERROR,
        payload: 'Ooops, something went wrong...',
      })
    }
  }
}

export const addEmployee = (user: Employee) => { 
  return async (dispatch: Dispatch<EmployeeAction>) => {
    try {
      dispatch({ type: EmployeeActionTypes.FETCH_EMPLOYEES });
      const response = await axios({
        method: 'post',
        url: '`http://localhost:5000/employees`',
        data: user,
      });
      dispatch({ type: EmployeeActionTypes.FETCH_EMPLOYEES_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({
        type: EmployeeActionTypes.FETCH_EMPLOYEES_ERROR,
        payload: 'Ooops, something went wrong...',
      })
    }
  }
}

export const setEmployeesPage = (page: number) => { 
  return { type: EmployeeActionTypes.SET_EMPLOYEES_PAGE, payload: page };
}
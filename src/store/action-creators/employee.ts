import { Employee, EmployeeAction, EmployeeActionTypes, IEmployee } from '../../types/employee';
import axios from "axios";
import { Dispatch } from "redux";

export const fetchEmployees = (page = 1, limit = 10) => { 
  return async (dispatch: Dispatch<EmployeeAction>) => {
    try {
      dispatch({ type: EmployeeActionTypes.SET_LOADING });
      const response = await axios.get<IEmployee[]>(`http://localhost:5000/employees?limit=${limit}&page=${page}`);
      dispatch({ type: EmployeeActionTypes.FETCH_EMPLOYEES_SUCCESS, payload: response.data });
      console.log(response.data);
    } catch (error) {
      dispatch({
        type: EmployeeActionTypes.FETCH_EMPLOYEES_ERROR,
        payload: 'Ooops, something went wrong...',
      })
    }
  }
}

export const deleteEmployeeAC = (id: string) => { 
  return async (dispatch: Dispatch<EmployeeAction>) => {
    try {
      dispatch({ type: EmployeeActionTypes.SET_LOADING });
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

export const addEmployeeAC = (employee: Employee) => { 
  return async (dispatch: Dispatch<EmployeeAction>) => {
    try {
      dispatch({ type: EmployeeActionTypes.SET_LOADING });
      const response = await axios({
        method: 'post',
        url: 'http://localhost:5000/employees',
        data: employee,
      });
      dispatch({ type: EmployeeActionTypes.ADD_EMPLOYEE, payload: response.data });
      fetchEmployees();
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
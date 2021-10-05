import { Employee, EmployeeAction, EmployeeActionTypes, IEmployee } from '../../types/employee';
import axios from "axios";
import { Dispatch } from "redux";

export const fetchEmployees = (page: number, limit: number) => { 
  return async (dispatch: Dispatch<EmployeeAction>) => {
    try {
      dispatch({ type: EmployeeActionTypes.SET_LOADING });
      const response = await axios.get<IEmployee[]>(`http://localhost:5000/employees?limit=${limit}&page=${page}`);
      dispatch({ type: EmployeeActionTypes.FETCH_EMPLOYEES_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({
        type: EmployeeActionTypes.FETCH_EMPLOYEES_ERROR,
        payload: 'Ooops, something went wrong...',
      })
    }
  }
}

export const fetchLastEmployees = () => { 
  return async (dispatch: Dispatch<EmployeeAction>) => {
    try {
      dispatch({ type: EmployeeActionTypes.SET_LOADING });
      const response = await axios.get<IEmployee[]>(`http://localhost:5000/employees/last`);
      dispatch({ type: EmployeeActionTypes.FETCH_EMPLOYEES_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({
        type: EmployeeActionTypes.FETCH_EMPLOYEES_ERROR,
        payload: 'Ooops, something went wrong...',
      })
    }
  }
}

export const getEmployeesNumber = () => { 
  return async (dispatch: Dispatch<EmployeeAction>) => {
    try {
      dispatch({ type: EmployeeActionTypes.SET_LOADING });
      const response = await axios.get<number>(`http://localhost:5000/employees/number`);
      dispatch({ type: EmployeeActionTypes.SET_EMPLOYEES_NUMBER, payload: response.data });
    } catch (error) {
      dispatch({
        type: EmployeeActionTypes.FETCH_EMPLOYEES_ERROR,
        payload: 'Ooops, something went wrong...',
      })
    }
  }
}

export const deleteEmployeeAC = (id: string, page: number, limit: number) => { 
  return async (dispatch: Dispatch<EmployeeAction>) => {
    try {
      dispatch({ type: EmployeeActionTypes.SET_LOADING });
      await axios.delete(`http://localhost:5000/employees/${id}`);
      dispatch({ type: EmployeeActionTypes.REMOVE_LOADING });
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
      await axios({
        method: 'post',
        url: 'http://localhost:5000/employees',
        data: employee,
      });
      dispatch({ type: EmployeeActionTypes.REMOVE_LOADING });
    } catch (error) {
      dispatch({
        type: EmployeeActionTypes.FETCH_EMPLOYEES_ERROR,
        payload: 'Ooops, something went wrong...',
      })
    }
  }
}

export const setEmployee = (id: string) => { 
  return async (dispatch: Dispatch<EmployeeAction>) => {
    try {
      dispatch({ type: EmployeeActionTypes.SET_LOADING });
      const response = await axios.get<IEmployee>(`http://localhost:5000/employees/id/${id}`);
      dispatch({ type: EmployeeActionTypes.SET_EMPLOYEE, payload: response.data });
    } catch (error) {
      dispatch({
        type: EmployeeActionTypes.FETCH_EMPLOYEES_ERROR,
        payload: 'Ooops, something went wrong...',
      })
    }
  }
}

export const setEmployeesLimit = (limit: number) => { 
  return { type: EmployeeActionTypes.SET_EMPLOYEES_LIMIT, payload: limit };
}

export const setEmployeesPage = (page: number) => { 
  return { type: EmployeeActionTypes.SET_EMPLOYEES_PAGE, payload: page };
}
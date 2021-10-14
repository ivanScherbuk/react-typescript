import { Employee, EmployeeAction, EmployeeActionTypes, IEmployee } from '../../types/employee';
import axios from "axios";
import { Dispatch } from "redux";

const initialPath = 'http://localhost:5000/employees';

export const fetchEmployees = (page: number, limit: number) => { 
  return async (dispatch: Dispatch<EmployeeAction>) => {
    try {
      dispatch({ type: EmployeeActionTypes.SET_LOADING });
      const response = await axios.get<IEmployee[]>(`${initialPath}?limit=${limit}&page=${page}`);
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
      const response = await axios.get<IEmployee[]>(`${initialPath}/last`);
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
      const response = await axios.get<number>(`${initialPath}/number`);
      dispatch({ type: EmployeeActionTypes.SET_EMPLOYEES_NUMBER, payload: response.data });
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
      await axios.delete(`${initialPath}/${id}`);
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
        url: initialPath,
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
      const response = await axios.get<IEmployee>(`${initialPath}/id/${id}`);
      dispatch({ type: EmployeeActionTypes.SET_EMPLOYEE, payload: response.data });
    } catch (error) {
      dispatch({
        type: EmployeeActionTypes.FETCH_EMPLOYEES_ERROR,
        payload: 'Ooops, something went wrong...',
      })
    }
  }
}

export const setSortedEmployees = (sortType: string, page: number, limit: number) => { 
  return async (dispatch: Dispatch<EmployeeAction>) => {
    try {
      dispatch({ type: EmployeeActionTypes.SET_LOADING });
      const response = await axios.get<IEmployee[]>(`${initialPath}/sort/${sortType}?limit=${limit}&page=${page}`);
      dispatch({ type: EmployeeActionTypes.SET_SORTED_EMPLOYEES, payload: response.data, sortType: sortType });
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
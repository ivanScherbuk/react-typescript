import axios from "axios";
import { Dispatch } from "redux";
import { Department, DepartmentAction, DepartmentActionTypes, IDepartment } from "../../types/department";

const initialPath = 'http://localhost:5000/departments';

export const fetchDepartments = (page: number, limit: number) => { 
  return async (dispatch: Dispatch<DepartmentAction>) => {
    try {
      dispatch({ type: DepartmentActionTypes.SET_LOADING });
      const response = await axios.get<IDepartment[]>(`${initialPath}?limit=${limit}&page=${page}`);
      dispatch({ type: DepartmentActionTypes.FETCH_DEPARTMENTS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({
        type: DepartmentActionTypes.FETCH_DEPARTMENTS_ERROR,
        payload: 'Ooops, something went wrong...',
      })
    }
  }
}

export const fetchTopDepartments = () => { 
  return async (dispatch: Dispatch<DepartmentAction>) => {
    try {
      dispatch({ type: DepartmentActionTypes.SET_LOADING });
      const response = await axios.get<IDepartment[]>(`${initialPath}/top`);
      dispatch({ type: DepartmentActionTypes.FETCH_DEPARTMENTS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({
        type: DepartmentActionTypes.FETCH_DEPARTMENTS_ERROR,
        payload: 'Ooops, something went wrong...',
      })
    }
  }
}

export const getDepartmentsNumber = () => { 
  return async (dispatch: Dispatch<DepartmentAction>) => {
    try {
      dispatch({ type: DepartmentActionTypes.SET_LOADING });
      const response = await axios.get<number>(`${initialPath}/number`);
      dispatch({ type: DepartmentActionTypes.SET_DEPARTMENTS_NUMBER, payload: response.data });
    } catch (error) {
      dispatch({
        type: DepartmentActionTypes.FETCH_DEPARTMENTS_ERROR,
        payload: 'Ooops, something went wrong...',
      })
    }
  }
}

export const deleteDepartmentAC = (id: string) => { 
  return async (dispatch: Dispatch<DepartmentAction>) => {
    try {
      dispatch({ type: DepartmentActionTypes.SET_LOADING });
      await axios.delete(`${initialPath}/${id}`);
      dispatch({ type: DepartmentActionTypes.REMOVE_LOADING });
    } catch (error) {
      dispatch({
        type: DepartmentActionTypes.FETCH_DEPARTMENTS_ERROR,
        payload: 'Ooops, something went wrong...',
      })
    }
  }
}

export const addDepartmentAC = (department: Department) => { 
  return async (dispatch: Dispatch<DepartmentAction>) => {
    try {
      dispatch({ type: DepartmentActionTypes.SET_LOADING });
      await axios({
        method: 'post',
        url: initialPath,
        data: department,
      });
      dispatch({ type: DepartmentActionTypes.REMOVE_LOADING });
    } catch (error) {
      dispatch({
        type: DepartmentActionTypes.FETCH_DEPARTMENTS_ERROR,
        payload: 'Ooops, something went wrong...',
      })
    }
  }
}

export const setDepartment = (id: string) => { 
  return async (dispatch: Dispatch<DepartmentAction>) => {
    try {
      dispatch({ type: DepartmentActionTypes.SET_LOADING });
      const response = await axios.get<IDepartment>(`${initialPath}/id/${id}`);
      dispatch({ type: DepartmentActionTypes.SET_DEPARTMENT, payload: response.data });
    } catch (error) {
      dispatch({
        type: DepartmentActionTypes.FETCH_DEPARTMENTS_ERROR,
        payload: 'Ooops, something went wrong...',
      })
    }
  }
}

export const setDepartmentsLimit = (limit: number) => { 
  return { type: DepartmentActionTypes.SET_DEPARTMENTS_LIMIT, payload: limit };
}

export const setDepartmentsPage = (page: number) => { 
  return { type: DepartmentActionTypes.SET_DEPARTMENTS_PAGE, payload: page };
}
import { DepartmentAction, DepartmentActionTypes, DepartmentState } from "../../types/department";

const storageLimit = window.localStorage.getItem('departmentsLimit');

const initialState: DepartmentState = {
  departments: [],
  loading: false,
  error: null,
  departmentsPage: 1,
  limit: storageLimit ? Number(storageLimit) : 10,
  departmentsNumber: 0,
  department: null,
}

export const departmentReducer = (state = initialState, action: DepartmentAction): DepartmentState => {
  switch (action.type) {
    case DepartmentActionTypes.SET_LOADING: 
      return { ...state, loading: true};
    case DepartmentActionTypes.REMOVE_LOADING: 
      return { ...state, loading: false };
    case DepartmentActionTypes.ADD_DEPARTMENT: 
      return { ...state, loading: false, departments: state.departments.length < state.limit ? [...state.departments, action.payload] : state.departments };
    case DepartmentActionTypes.SET_DEPARTMENTS_NUMBER: 
      return { ...state, loading: false, departmentsNumber: action.payload };
    case DepartmentActionTypes.FETCH_DEPARTMENTS_SUCCESS: 
      return { ...state, loading: false, departments: action.payload };
    case DepartmentActionTypes.FETCH_DEPARTMENTS_ERROR: 
      return { ...state, loading: false, error: action.payload };
    case DepartmentActionTypes.SET_DEPARTMENTS_PAGE: 
      return { ...state, departmentsPage: action.payload };
    case DepartmentActionTypes.SET_DEPARTMENTS_LIMIT: 
      return { ...state, limit: action.payload };
    case DepartmentActionTypes.SET_DEPARTMENT: 
      return { ...state, loading: false, department: action.payload };
    default: 
      return state;
  }
}
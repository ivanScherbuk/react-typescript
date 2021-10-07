import { EmployeeAction, EmployeeActionTypes, EmployeeState } from '../../types/employee';

const storageLimit = window.localStorage.getItem('employeesLimit');

const initialState: EmployeeState = {
  employees: [],
  loading: false,
  error: null,
  employeesPage: 1,
  limit: storageLimit ? Number(storageLimit) : 10,
  employeesNumber: 0,
  employee: null,
  sortType: '',
}

export const employeeReducer = (state = initialState, action: EmployeeAction): EmployeeState => {
  switch (action.type) {
    case EmployeeActionTypes.SET_LOADING: 
      return { ...state, loading: true};
    case EmployeeActionTypes.REMOVE_LOADING: 
      return { ...state, loading: false };
    case EmployeeActionTypes.ADD_EMPLOYEE: 
      return { ...state, loading: false, employees: state.employees.length < state.limit ? [...state.employees, action.payload] : state.employees };
    case EmployeeActionTypes.SET_EMPLOYEES_NUMBER: 
      return { ...state, loading: false, employeesNumber: action.payload };
    case EmployeeActionTypes.FETCH_EMPLOYEES_SUCCESS: 
      return { ...state, loading: false, employees: action.payload };
    case EmployeeActionTypes.FETCH_EMPLOYEES_ERROR: 
      return { ...state, loading: false, error: action.payload };
    case EmployeeActionTypes.SET_EMPLOYEES_PAGE: 
      return { ...state, employeesPage: action.payload };
    case EmployeeActionTypes.SET_EMPLOYEES_LIMIT: 
      return { ...state, limit: action.payload };
    case EmployeeActionTypes.SET_EMPLOYEE: 
      return { ...state, loading: false, employee: action.payload };
    case EmployeeActionTypes.SET_SORTED_EMPLOYEES: 
      return { ...state, loading: false, sortType: action.sortType, employees: action.payload };
    default: 
      return state;
  }
}
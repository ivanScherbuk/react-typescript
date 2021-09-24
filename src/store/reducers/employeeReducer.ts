import { EmployeeAction, EmployeeActionTypes, EmployeeState } from '../../types/employee';

const initialState: EmployeeState = {
  employees: [],
  loading: false,
  error: null,
  page: 1,
  limit: 10,
  employeesNumber: 0,
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
      return { ...state, page: action.payload };
    default: 
      return state;
  }
}
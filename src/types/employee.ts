export interface EmployeeState {
  employees: any[],
  loading: boolean;
  error: null | string;
  page: number;
  limit: number;
}

export interface Employee {
  firstName: string,
  lastName: string;
  company: string;
  department: string;
  position: string;
}

export enum EmployeeActionTypes {
  FETCH_EMPLOYEES = 'FETCH_EMPLOYEES',
  FETCH_EMPLOYEES_SUCCESS = 'FETCH_EMPLOYEES_SUCCESS',
  FETCH_EMPLOYEES_ERROR = 'FETCH_EMPLOYEES_ERROR',
  SET_EMPLOYEES_PAGE = 'SET_EMPLOYEES_PAGE',
}

interface FetchEmployeesAction {
  type: EmployeeActionTypes.FETCH_EMPLOYEES;
}

interface FetchEmployeesSuccessAction {
  type: EmployeeActionTypes.FETCH_EMPLOYEES_SUCCESS;
  payload: any[];
}

interface FetchEmployeesErrorAction {
  type: EmployeeActionTypes.FETCH_EMPLOYEES_ERROR;
  payload: string;
}

interface SetEmployeesPageAction {
  type: EmployeeActionTypes.SET_EMPLOYEES_PAGE;
  payload: number;
}

export type EmployeeAction = FetchEmployeesAction | FetchEmployeesSuccessAction | FetchEmployeesErrorAction | SetEmployeesPageAction;
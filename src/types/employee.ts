export interface IEmployee {
  id: string,
  firstName: string;
  lastName: string;
  company: string;
  department: string;
  position: string;
  createdAt: string;
}

export interface EmployeeState {
  employees: IEmployee[];
  loading: boolean;
  error: null | string;
  employeesPage: number;
  limit: number;
  employeesNumber: number;
  employee: IEmployee | null;
  sortType: string;
}

export interface Employee {
  firstName: string;
  lastName: string;
  company: string;
  department: string;
  position: string;
}

export interface EmployeeParams {
  page: string;
  id: string;
}

export enum EmployeeActionTypes {
  SET_LOADING = 'SET_LOADING',
  REMOVE_LOADING = 'REMOVE_LOADING',
  ADD_EMPLOYEE = 'ADD_EMPLOYEE',
  SET_EMPLOYEES_NUMBER = 'SET_EMPLOYEES_NUMBER',
  FETCH_EMPLOYEES_SUCCESS = 'FETCH_EMPLOYEES_SUCCESS',
  FETCH_EMPLOYEES_ERROR = 'FETCH_EMPLOYEES_ERROR',
  SET_EMPLOYEES_PAGE = 'SET_EMPLOYEES_PAGE',
  SET_EMPLOYEES_LIMIT = 'SET_EMPLOYEES_LIMIT',
  SET_EMPLOYEE = 'SET_EMPLOYEE',
  SET_SORTED_EMPLOYEES = 'SET_SORTED_EMPLOYEES',
}

interface SetLoadingAction {
  type: EmployeeActionTypes.SET_LOADING;
}

interface RemoveLoadingAction {
  type: EmployeeActionTypes.REMOVE_LOADING;
}

interface AddEmployeeAction {
  type: EmployeeActionTypes.ADD_EMPLOYEE;
  payload: IEmployee;
}

interface SetEmployeesNumber {
  type: EmployeeActionTypes.SET_EMPLOYEES_NUMBER;
  payload: number;
}

interface FetchEmployeesSuccessAction {
  type: EmployeeActionTypes.FETCH_EMPLOYEES_SUCCESS;
  payload: IEmployee[];
}

interface FetchEmployeesErrorAction {
  type: EmployeeActionTypes.FETCH_EMPLOYEES_ERROR;
  payload: string;
}

interface SetEmployeesPageAction {
  type: EmployeeActionTypes.SET_EMPLOYEES_PAGE;
  payload: number;
}

interface SetEmployeesLimitAction {
  type: EmployeeActionTypes.SET_EMPLOYEES_LIMIT;
  payload: number;
}

interface SetEmployeeAction {
  type: EmployeeActionTypes.SET_EMPLOYEE;
  payload: IEmployee;
}

interface SetSortedEmployeesAction {
  type: EmployeeActionTypes.SET_SORTED_EMPLOYEES;
  payload: IEmployee[];
  sortType: string;
}

export type EmployeeAction = SetLoadingAction | RemoveLoadingAction | AddEmployeeAction | SetEmployeesNumber | FetchEmployeesSuccessAction | FetchEmployeesErrorAction | SetEmployeesPageAction | SetEmployeesLimitAction | SetEmployeeAction | SetSortedEmployeesAction;
import { IEmployee } from "./employee";

export interface IDepartment {
  id: string,
  name: string;
  employeesNumber: number;
  employees: IEmployee[];
  createdAt: string;
}

export interface Department {
  name: string;
  employeesNumber: number;
}

export interface DepartmentState {
  departments: IDepartment[];
  loading: boolean;
  error: null | string;
  departmentsPage: number;
  limit: number;
  departmentsNumber: number;
  department: IDepartment | null;
}

export interface DepartmentParams {
  page: string;
  id: string;
}

export enum DepartmentActionTypes {
  FETCH_DEPARTMENTS_SUCCESS = 'FETCH_DEPARTMENTS_SUCCESS',
  FETCH_DEPARTMENTS_ERROR = 'FETCH_DEPARTMENTS_ERROR',
  SET_LOADING = 'SET_LOADING',
  REMOVE_LOADING = 'REMOVE_LOADING',
  ADD_DEPARTMENT = 'ADD_DEPARTMENT',
  SET_DEPARTMENTS_NUMBER = 'SET_DEPARTMENTS_NUMBER',
  SET_DEPARTMENTS_PAGE = 'SET_DEPARTMENTS_PAGE',
  SET_DEPARTMENTS_LIMIT = 'SET_DEPARTMENTS_LIMIT',
  SET_DEPARTMENT = 'SET_DEPARTMENT',
}

interface SetLoadingAction {
  type: DepartmentActionTypes.SET_LOADING;
}

interface RemoveLoadingAction {
  type: DepartmentActionTypes.REMOVE_LOADING;
}

interface AddDepartmentAction {
  type: DepartmentActionTypes.ADD_DEPARTMENT;
  payload: IDepartment;
}

interface SetDepartmentsNumber {
  type: DepartmentActionTypes.SET_DEPARTMENTS_NUMBER;
  payload: number;
}

interface FetchDepartmentsSuccessAction {
  type: DepartmentActionTypes.FETCH_DEPARTMENTS_SUCCESS;
  payload: IDepartment[];
}

interface FetchDepartmentsErrorAction {
  type: DepartmentActionTypes.FETCH_DEPARTMENTS_ERROR;
  payload: string;
}

interface SetDepartmentsPageAction {
  type: DepartmentActionTypes.SET_DEPARTMENTS_PAGE;
  payload: number;
}

interface SetDepartmentsLimitAction {
  type: DepartmentActionTypes.SET_DEPARTMENTS_LIMIT;
  payload: number;
}

interface SetDepartmentAction {
  type: DepartmentActionTypes.SET_DEPARTMENT;
  payload: IDepartment;
}


export type DepartmentAction =
  SetLoadingAction |
  RemoveLoadingAction |
  AddDepartmentAction |
  SetDepartmentsNumber |
  FetchDepartmentsSuccessAction |
  FetchDepartmentsErrorAction |
  SetDepartmentsPageAction |
  SetDepartmentsLimitAction |
  SetDepartmentAction;
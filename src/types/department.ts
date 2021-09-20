export interface DepartmentState {
  departments: any[];
  loading: boolean;
  error: null | string;
}

export enum DepartmentActionTypes {
  FETCH_DEPARTMENTS = 'FETCH_DEPARTMENTS',
  FETCH_DEPARTMENTS_SUCCESS = 'FETCH_DEPARTMENTS_SUCCESS',
  FETCH_DEPARTMENTS_ERROR = 'FETCH_DEPARTMENTS_ERROR',
}

interface FetchDepartmentsAction {
  type: DepartmentActionTypes.FETCH_DEPARTMENTS;
}

interface FetchDepartmentsSuccessAction {
  type: DepartmentActionTypes.FETCH_DEPARTMENTS_SUCCESS;
  payload: any[];
}

interface FetchDepartmentsErrorAction {
  type: DepartmentActionTypes.FETCH_DEPARTMENTS_ERROR;
  payload: string;
}

export type DepartmentAction = FetchDepartmentsAction | FetchDepartmentsSuccessAction | FetchDepartmentsErrorAction;
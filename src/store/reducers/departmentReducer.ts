import { DepartmentAction, DepartmentActionTypes, DepartmentState } from "../../types/department";

const initialState: DepartmentState = {
  departments: [],
  loading: false,
  error: null,
}

export const departmentReducer = (state = initialState, action: DepartmentAction): DepartmentState => {
  switch (action.type) {
    case DepartmentActionTypes.FETCH_DEPARTMENTS: 
      return { loading: true, error: null, departments: [] };
    case DepartmentActionTypes.FETCH_DEPARTMENTS_SUCCESS: 
      return { loading: false, error: null, departments: action.payload };
    case DepartmentActionTypes.FETCH_DEPARTMENTS_ERROR: 
      return { loading: false, error: action.payload, departments: [] };
    default: 
      return state;
  }
}
import { combineReducers } from "redux";
import { departmentReducer } from "./departmentReducer";
import { employeeReducer } from "./employeeReducer";

export const rootReducer = combineReducers({
  employee: employeeReducer,
  department: departmentReducer,
})

export type RootState = ReturnType<typeof rootReducer>;

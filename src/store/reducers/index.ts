import { combineReducers } from "redux";
import { departmentReducer } from "./departmentReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  department: departmentReducer,
})

export type RootState = ReturnType<typeof rootReducer>;

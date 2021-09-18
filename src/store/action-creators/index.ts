import * as EmployeeActionCreators from './employee';
import * as DepartmentActionCreators from './department';

export default {
  ...EmployeeActionCreators,
  ...DepartmentActionCreators,
}
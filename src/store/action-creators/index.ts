import * as UserActionCreators from './user';
import * as DepartmentActionCreators from './department';

export default {
  ...UserActionCreators,
  ...DepartmentActionCreators,
}
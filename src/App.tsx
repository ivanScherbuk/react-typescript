import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DepartmentScreen from './screens/DepartmentScreen';
import DepartmentsScreen from './screens/DepartmentsScreen';
import EmployeeScreen from './screens/EmployeeScreen';
import EmployeesScreen from './screens/EmployeesScreen';
import LastEmployeesScreen from './screens/LastEmployeesScreen';
import MainScreen from './screens/MainScreen';
import TopDepartmentsScreen from './screens/TopDepartmentsScreen';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/employees/id/:id'}>
          <EmployeeScreen />
        </Route>
        <Route path={'/employees/last'}>
          <LastEmployeesScreen />
        </Route>
        <Route path={'/employees/:page'}>
          <EmployeesScreen />
        </Route>
        <Route path={'/departments/id/:id'}>
          <DepartmentScreen />
        </Route>
        <Route path={'/departments/top'}>
          <TopDepartmentsScreen />
        </Route>
        <Route path={'/departments/:page'}>
          <DepartmentsScreen />
        </Route>
        <Route path={'/'}>
          <MainScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

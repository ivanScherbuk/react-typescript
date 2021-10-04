import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DepartmentScreen from './screens/DepartmentScreen';
import EmployeeScreen from './screens/EmployeeScreen';
import EmployeesScreen from './screens/EmployeesScreen';
import LastEmployeesScreen from './screens/LastEmployeesScreen';
import MainScreen from './screens/MainScreen';

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
        <Route path={'/departments'}>
          <DepartmentScreen />
        </Route>
        <Route path={'/'}>
          <MainScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

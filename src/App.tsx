import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DepartmentScreen from './screens/DepartmentScreen';
import EmployeeScreen from './screens/EmployeeScreen';
import MainScreen from './screens/MainScreen';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/employees/:page'}>
          <EmployeeScreen />
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

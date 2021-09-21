import React from 'react';
import { NavLink } from 'react-router-dom';

const MainScreen: React.FC = () => {
  return (
    <div>
      <NavLink to='/employees'>
        Employees
      </NavLink>
      <NavLink to='/departments'>
        Departments
      </NavLink>
    </div>
  )
}

export default MainScreen;

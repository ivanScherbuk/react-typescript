import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/MainScreen.module.css';

const MainScreen: React.FC = () => {
  return (
    <div className={styles.container}>
      <NavLink className={styles.button} to='/employees/1'>
        <div className={styles.buttonText}>
          Employees
        </div>
      </NavLink>
      <NavLink className={styles.button} to='/departments/1'>
        <div className={styles.buttonText}>
          Departments
        </div>
      </NavLink>
    </div>
  )
}

export default MainScreen;

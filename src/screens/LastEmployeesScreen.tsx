import React, { useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import EmployeesTable from '../components/EmployeesTable';
import { useActions } from '../hooks/useActions';
import { NavLink } from 'react-router-dom';
import styles from '../styles/EmployeesScreen.module.css';

const LastEmployeesScreen: React.FC = () => {
  const { employees, error, loading} = useTypedSelector(state => state.employee);
  const { fetchLastEmployees } = useActions();

  useEffect(() => {
    fetchLastEmployees();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <EmployeesTable
        employees={employees}
        lastEmployees
      />
      <NavLink className={styles.button} to='/employees/1'>
        <div className={styles.buttonText}>
          Back
        </div>
      </NavLink>
    </div>
  );
}

export default LastEmployeesScreen;

import React, { useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import EmployeesTable from '../components/EmployeesTable';
import { useActions } from '../hooks/useActions';
import styles from '../styles/Button.module.css';
import { useHistory } from 'react-router';

const LastEmployeesScreen: React.FC = () => {
  const { employees, error, loading} = useTypedSelector(state => state.employee);
  const { fetchLastEmployees } = useActions();

  const history = useHistory();

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
      <button className={styles.button} onClick={() => history.goBack()}>
        <div className={styles.buttonText}>
          Back
        </div>
      </button>
    </div>
  );
}

export default LastEmployeesScreen;

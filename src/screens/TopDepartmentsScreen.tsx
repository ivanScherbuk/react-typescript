import React, { useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
import styles from '../styles/Button.module.css';
import { useHistory } from 'react-router';
import DepartmentsTable from '../components/DepartmentsTable';

const TopDepartmentsScreen: React.FC = () => {
  const { departments, error, loading} = useTypedSelector(state => state.department);
  const { fetchTopDepartments } = useActions();

  const history = useHistory();

  useEffect(() => {
    fetchTopDepartments();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <DepartmentsTable
        departments={departments}
        topDepartments
      />
      <button className={styles.button} onClick={() => history.goBack()}>
        <div className={styles.buttonText}>
          Back
        </div>
      </button>
    </div>
  );
}

export default TopDepartmentsScreen;

import React, { useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useParams, useHistory } from 'react-router-dom';
import styles from '../styles/Table.module.css';
import cn from 'classnames/bind';
import { EmployeeParams } from '../types/employee';

const DepartmentScreen: React.FC = () => {
  const { department, error, loading } = useTypedSelector(state => state.department);
  const { setDepartment } = useActions();

  const { id } = useParams<EmployeeParams>();

  const history = useHistory();

  useEffect(() => {
    setDepartment(id);
  }, [id]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <table className={styles.table}>
        <tbody>
          <tr>
            <th className={styles.tableItem}>Id</th>
            <td className={cn(styles.tableItem, styles.borderRight)}>{id}</td>
          </tr>
          <tr>
            <th className={styles.tableItem}>Department Name</th>
            <td className={cn(styles.tableItem, styles.borderRight)}>{department?.name}</td>
          </tr>
          <tr>
            <th className={styles.tableItem}>Employees Number</th>
            <td className={cn(styles.tableItem, styles.borderRight)}>{department?.employeesNumber}</td>
          </tr>
          <tr>
            <th className={cn(styles.tableItem, styles.borderBottom)}>Employment Date</th>
            <td className={cn(styles.tableItem, styles.borderBottom, styles.borderRight)}>{department?.createdAt}</td>
          </tr>
        </tbody>
      </table>
      <div>
        Employees:
        {department?.employees.map((employee) => 
          <div>
            {`${employee.firstName} ${employee.lastName}`}
          </div>
        )}
      </div>
      <button className={styles.button} onClick={() => history.goBack()}>
        <div className={styles.buttonText}>
          Back
        </div>
      </button>
    </div>
  )
}

export default DepartmentScreen;

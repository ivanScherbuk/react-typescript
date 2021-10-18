import React from 'react';
import { IEmployee } from '../types/employee';
import cn from 'classnames/bind';
import styles from '../styles/Table.module.css';
import { NavLink } from 'react-router-dom';

interface EmployeesTableProps {
  employees: IEmployee[],
  deleteEmployee?: (str: string) => void,
  lastEmployees?: boolean,
}

const EmployeesTable: React.FC<EmployeesTableProps> = ({ employees, deleteEmployee, lastEmployees }) => {
  function getDate (date: string) {
    const newDate = new Date(date);
    const day = newDate.getDate() + 1;
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();

    return `${day < 10 ? `0${day}` : day}.${month < 10 ? `0${month}` : month}.${year}`;
  }

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.tableItem}>First Name</th>
          <th className={styles.tableItem}>Last Name</th>
          <th className={styles.tableItem}>Company</th>
          <th className={styles.tableItem}>Department</th>
          <th className={styles.tableItem}>Position</th>
          <th className={styles.tableItem}>Employment Date</th>
          {!lastEmployees && <th className={styles.tableItem}>Delete</th>}
          <th className={cn(styles.tableItem, styles.borderRight)}>Info</th>
        </tr>
      </thead>
      <tbody>
        {employees?.map((employee, index) => {
          return (
            <tr key={employee.id}>
              <td className={cn(styles.tableItem, index === employees.length - 1 && styles.borderBottom)}>{employee.firstName}</td>
              <td className={cn(styles.tableItem, index === employees.length - 1 && styles.borderBottom)}>{employee.lastName}</td>
              <td className={cn(styles.tableItem, index === employees.length - 1 && styles.borderBottom)}>{employee.company}</td>
              <td className={cn(styles.tableItem, index === employees.length - 1 && styles.borderBottom)}>{employee.department}</td>
              <td className={cn(styles.tableItem, index === employees.length - 1 && styles.borderBottom)}>{employee.position}</td>
              <td className={cn(styles.tableItem, index === employees.length - 1 && styles.borderBottom)}>{getDate(employee.createdAt)}</td>
              {!lastEmployees &&
                <td className={cn(styles.tableItem, index === employees.length - 1 && styles.borderBottom)}>
                  <button
                    className={cn(styles.button, styles.buttonDelete)}
                    onClick={() => deleteEmployee && deleteEmployee(employee.id)}
                  >
                    <div className={styles.buttonText}>
                      -
                    </div>
                  </button>
                </td>}
              <td className={cn(styles.tableItem, styles.borderRight, index === employees.length - 1 && styles.borderBottom)}>
                <NavLink className={cn(styles.button, styles.buttonDelete)} to={`/employees/id/${employee.id}`}>
                  <div className={styles.buttonText}>
                    +
                  </div>
                </NavLink>
              </td>
            </tr>
        )})}
      </tbody>
    </table>
  )
}

export default EmployeesTable;

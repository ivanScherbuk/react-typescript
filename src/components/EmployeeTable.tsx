import React from 'react';
import { IEmployee } from '../types/employee';
import cn from 'classnames/bind';
import styles from '../styles/EmployeesScreen.module.css';

interface EmployeeTableProps {
  employees: IEmployee[],
  deleteEmployee?: (str: string) => void,
  lastEmployees?: boolean,
}

const EmployeeTable: React.FC<EmployeeTableProps> = ({ employees, deleteEmployee, lastEmployees }) => {
  function getDate (date: string) {
    const newDate = new Date(date);
    const day = newDate.getDate() + 1;
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();

    return `${day < 10 ? `0${day}` : day}.${month < 10 ? `0${month}` : month}.${year}`;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Company</th>
          <th>Department</th>
          <th>Position</th>
          <th>Employment Date</th>
          {!lastEmployees && <th>Delete</th>}
        </tr>
      </thead>
      <tbody>
        {employees?.map(employee => {
          return (
            <tr key={employee.id}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.company}</td>
              <td>{employee.department}</td>
              <td>{employee.position}</td>
              <td>{getDate(employee.createdAt)}</td>
              {!lastEmployees &&
                <td>
                  <button
                    className={cn(styles.button, styles.buttonDelete)}
                    onClick={() => deleteEmployee && deleteEmployee(employee.id)}
                  >
                    <div className={styles.buttonText}>
                      -
                    </div>
                  </button>
                </td>}
            </tr>
        )})}
      </tbody>
    </table>
  )
}

export default EmployeeTable;

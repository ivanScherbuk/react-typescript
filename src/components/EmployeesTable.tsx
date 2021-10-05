import React from 'react';
import { IEmployee } from '../types/employee';
import cn from 'classnames/bind';
import styles from '../styles/Button.module.css';
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
    <table style={{ 'borderWidth':'1px', 'borderColor':'black', 'borderStyle':'solid', 'borderSpacing': '0' }}>
      <thead>
        <tr>
          <th style={thtdStyle}>First Name</th>
          <th style={thtdStyle}>Last Name</th>
          <th style={thtdStyle}>Company</th>
          <th style={thtdStyle}>Department</th>
          <th style={thtdStyle}>Position</th>
          <th style={thtdStyle}>Employment Date</th>
          {!lastEmployees && <th style={thtdStyle}>Delete</th>}
          <th style={borderRight0}>Info</th>
        </tr>
      </thead>
      <tbody>
        {employees?.map((employee, index) => {
          return (
            <tr key={employee.id}>
              <td style={index !== employees.length - 1 ? thtdStyle : borderBottom0}>{employee.firstName}</td>
              <td style={index !== employees.length - 1 ? thtdStyle : borderBottom0}>{employee.lastName}</td>
              <td style={index !== employees.length - 1 ? thtdStyle : borderBottom0}>{employee.company}</td>
              <td style={index !== employees.length - 1 ? thtdStyle : borderBottom0}>{employee.department}</td>
              <td style={index !== employees.length - 1 ? thtdStyle : borderBottom0}>{employee.position}</td>
              <td style={index !== employees.length - 1 ? thtdStyle : borderBottom0}>
                {getDate(employee.createdAt)}
              </td>
              {!lastEmployees &&
                <td style={index !== employees.length - 1 ? thtdStyle : borderBottom0}>
                  <button
                    className={cn(styles.button, styles.buttonDelete)}
                    onClick={() => deleteEmployee && deleteEmployee(employee.id)}
                  >
                    <div className={styles.buttonText}>
                      -
                    </div>
                  </button>
                </td>}
              <td style={index !== employees.length - 1 ? borderRight0 : borderRight0Bottom0}>
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

const thtdStyle = { 'padding': '0.5rem', 'borderBottom': '1px solid black', 'borderRight': '1px solid black' };
const borderRight0 = { 'padding': '0.5rem', 'borderBottom': '1px solid black', 'borderRight': '0px solid black' };
const borderBottom0 = { 'padding': '0.5rem', 'borderBottom': '0px solid black', 'borderRight': '1px solid black' };
const borderRight0Bottom0 = { 'padding': '0.5rem', 'borderBottom': '0px solid black', 'borderRight': '0px solid black' };

export default EmployeesTable;

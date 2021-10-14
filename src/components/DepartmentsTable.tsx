import React from 'react';
import cn from 'classnames/bind';
import styles from '../styles/Button.module.css';
import { NavLink } from 'react-router-dom';
import { IDepartment } from '../types/department';

interface DepartmentsTableProps {
  departments: IDepartment[],
  deleteDepartment?: (str: string) => void,
  topDepartments?: boolean,
}

const DepartmentsTable: React.FC<DepartmentsTableProps> = ({ departments, deleteDepartment, topDepartments }) => {
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
          <th style={thtdStyle}>Department Name</th>
          <th style={thtdStyle}>Employees Number</th>
          <th style={thtdStyle}>Foundation Date</th>
          {!topDepartments && <th style={thtdStyle}>Delete</th>}
          <th style={borderRight0}>Info</th>
        </tr>
      </thead>
      <tbody>
        {departments?.map((department, index) => {
          return (
            <tr key={department.id}>
              <td style={index !== departments.length - 1 ? thtdStyle : borderBottom0}>{department.name}</td>
              <td style={index !== departments.length - 1 ? thtdStyle : borderBottom0}>{department.employeesNumber}</td>
              <td style={index !== departments.length - 1 ? thtdStyle : borderBottom0}>
                {getDate(department.createdAt)}
              </td>
              {!topDepartments &&
                <td style={index !== departments.length - 1 ? thtdStyle : borderBottom0}>
                  <button
                    className={cn(styles.button, styles.buttonDelete)}
                    onClick={() => deleteDepartment && deleteDepartment(department.id)}
                  >
                    <div className={styles.buttonText}>
                      -
                    </div>
                  </button>
                </td>}
              <td style={index !== departments.length - 1 ? borderRight0 : borderRight0Bottom0}>
                <NavLink className={cn(styles.button, styles.buttonDelete)} to={`/departments/id/${department.id}`}>
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

export default DepartmentsTable;

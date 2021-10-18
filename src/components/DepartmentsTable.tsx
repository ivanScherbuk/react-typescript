import React from 'react';
import cn from 'classnames/bind';
import styles from '../styles/Table.module.css';
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
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.tableItem}>Department Name</th>
          <th className={styles.tableItem}>Employees Number</th>
          <th className={styles.tableItem}>Foundation Date</th>
          {!topDepartments && <th className={styles.tableItem}>Delete</th>}
          <th className={cn(styles.tableItem, styles.borderRight)}>Info</th>
        </tr>
      </thead>
      <tbody>
        {departments?.map((department, index) => {
          return (
            <tr key={department.id}>
              <td className={cn(styles.tableItem, index === departments.length - 1 && styles.borderBottom)}>{department.name}</td>
              <td className={cn(styles.tableItem, index === departments.length - 1 && styles.borderBottom)}>{department.employeesNumber}</td>
              <td className={cn(styles.tableItem, index === departments.length - 1 && styles.borderBottom)}>{getDate(department.createdAt)}</td>
              {!topDepartments &&
                <td className={cn(styles.tableItem, index === departments.length - 1 && styles.borderBottom)}>
                  <button
                    className={cn(styles.button, styles.buttonDelete)}
                    onClick={() => deleteDepartment && deleteDepartment(department.id)}
                  >
                    <div className={styles.buttonText}>
                      -
                    </div>
                  </button>
                </td>}
              <td className={cn(styles.tableItem, styles.borderRight, index === departments.length - 1 && styles.borderBottom)}>
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

export default DepartmentsTable;

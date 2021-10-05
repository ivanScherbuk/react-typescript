import React, { useEffect, useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import EmployeesTable from '../components/EmployeesTable';
import { Employee, EmployeeParams } from '../types/employee';
import Pagination from '../components/Pagination';
import { useHistory, useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import styles from '../styles/Button.module.css';
import AddEmployeeModal from '../components/AddEmployeeModal';
import LimitModal from '../components/LimitModal';

const EmployeesScreen: React.FC = () => {
  const [ maxPage, setMaxPage ] = useState<number>(0);
  const { employees, error, loading, employeesPage, limit, employeesNumber } = useTypedSelector(state => state.employee);
  const { fetchEmployees, deleteEmployeeAC, addEmployeeAC, getEmployeesNumber, setEmployeesPage, setEmployeesLimit } = useActions();
  const [ isAddEmployeeShowModal, setIsAddEmployeeShowModal ] = useState<boolean>(false);
  const [ isLimitShowModal, setIsLimitShowModal ] = useState<boolean>(false);

  const history = useHistory();

  const { page } = useParams<EmployeeParams>();

  useEffect(() => {
    getEmployeesNumber();
  }, []);

  useEffect(() => {
    setEmployeesPage(Number(page));
    fetchEmployees(Number(page), limit);
  }, [page, limit]);

  useEffect(() => {
    setMaxPage(Math.ceil(employeesNumber / limit));
    fetchEmployees(employeesPage, limit);
  }, [employeesNumber, limit]);

  const deleteEmployee = async (id: string) => {
    let newPage = employeesPage;
    if (employees.length === 1 && employeesPage > 1) {
      newPage = employeesPage - 1;
    }
    await deleteEmployeeAC(id, newPage, limit);
    getEmployeesNumber();
    if (newPage !== employeesPage) {
      history.push(`${newPage}`);
    }
  }

  const setPage = (pageDif: number) => {
    const newPage = employeesPage + pageDif;
    if (newPage && newPage !== employeesPage && newPage <= maxPage) {
      history.push(`${newPage}`);
    }
  }

  const addEmployee = async (employee: Employee) => {
    const emptyFields = Object.values(employee).filter((item) => !item.length);
    if (emptyFields.length) {
      alert('Please, fill in all fields!');
    } else {
      await addEmployeeAC(employee);
      getEmployeesNumber();
    }
  }

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
        deleteEmployee={deleteEmployee}
      />
      <Pagination
        page={employeesPage}
        limit={limit}
        maxPage={maxPage}
        setPage={setPage}
      />
      {isAddEmployeeShowModal &&
        <AddEmployeeModal closeModal={() => setIsAddEmployeeShowModal(false)} addEmployee={addEmployee} />
      }
      {isLimitShowModal &&
        <LimitModal closeModal={() => setIsLimitShowModal(false)} setEmployeesLimit={setEmployeesLimit} />
      }
      <div className={styles.buttons}>
        <NavLink className={styles.button} to='/'>
          <div className={styles.buttonText}>
            Back to Menu
          </div>
        </NavLink>
        <NavLink className={styles.button} to='/employees/last'>
          <div className={styles.buttonText}>
            Last 5 Employees
          </div>
        </NavLink>
        <button className={styles.button} onClick={() => setIsAddEmployeeShowModal(true)}>
          <div className={styles.buttonText}>
            Add Employee
          </div>
        </button>
        <button className={styles.button} onClick={() => setIsLimitShowModal(true)}>
          <div className={styles.buttonText}>
            Change Table Limit
          </div>
        </button>
      </div>
    </div>
  )
}

export default EmployeesScreen;

import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import AddDepartmentModal from '../components/AddDepartmentModal';
import DepartmentsTable from '../components/DepartmentsTable';
import LimitModal from '../components/LimitModal';
import Pagination from '../components/Pagination';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import styles from '../styles/Button.module.css';
import { Department, DepartmentParams } from '../types/department';

const DepartmentsScreen: React.FC = () => {
  const [ maxPage, setMaxPage ] = useState<number>(0);
  const { departments, error, loading, departmentsPage, limit, departmentsNumber } = useTypedSelector(state => state.department);
  const { fetchDepartments, getDepartmentsNumber, setDepartmentsPage, deleteDepartmentAC, addDepartmentAC, setDepartmentsLimit } = useActions();
  const [ isAddDepartmentShow, setIsAddDepartmentShowModal ] = useState<boolean>(false);
  const [ isLimitShowModal, setIsLimitShowModal ] = useState<boolean>(false);

  const history = useHistory();

  const { page } = useParams<DepartmentParams>();

  useEffect(() => {
    getDepartmentsNumber();
  }, []);

  useEffect(() => {
    const pageNumber = Number(page);
    setDepartmentsPage(pageNumber);
    fetchDepartments(pageNumber, limit);
  }, [page, limit]);

  useEffect(() => {
    setMaxPage(Math.ceil(departmentsNumber / limit));
    fetchDepartments(departmentsPage, limit);
  }, [departmentsNumber, limit]);

  const deleteDepartment = async (id: string) => {
    let newPage = departmentsPage;
    if (departments.length === 1 && departmentsPage > 1) {
      newPage = departmentsPage - 1;
    }
    await deleteDepartmentAC(id);
    getDepartmentsNumber();
    if (newPage !== departmentsPage) {
      history.push(`${newPage}`);
    }
  }

  const setPage = (pageDif: number) => {
    const newPage = departmentsPage + pageDif;
    if (newPage && newPage !== departmentsPage && newPage <= maxPage) {
      history.push(`${newPage}`);
    }
  }

  const addDepartment = async (department: Department) => {
    console.log(department.employeesNumber);
    if (!department.name) {
      alert('Please, fill in all fields!');
    } else if (department.employeesNumber > 0 && department.employeesNumber < 1000) {
      await addDepartmentAC(department);
      getDepartmentsNumber();
    } else {
      alert('Please, enter positive Number under 1000!')
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
      <DepartmentsTable
        departments={departments}
        deleteDepartment={deleteDepartment}
      />
      <Pagination
        page={departmentsPage}
        limit={limit}
        maxPage={maxPage}
        setPage={setPage}
      />
      {isAddDepartmentShow &&
        <AddDepartmentModal closeModal={() => setIsAddDepartmentShowModal(false)} addDepartment={addDepartment} />
      }
      {isLimitShowModal &&
        <LimitModal closeModal={() => setIsLimitShowModal(false)} setLimit={setDepartmentsLimit} />
      }
      <div className={styles.buttons}>
        <NavLink className={styles.button} to='/'>
          <div className={styles.buttonText}>
            Back to Menu
          </div>
        </NavLink>
        <NavLink className={styles.button} to='/departments/top'>
          <div className={styles.buttonText}>
            Top 5 Departments
          </div>
        </NavLink>
        <button className={styles.button} onClick={() => setIsAddDepartmentShowModal(true)}>
          <div className={styles.buttonText}>
            Add Department
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

export default DepartmentsScreen;

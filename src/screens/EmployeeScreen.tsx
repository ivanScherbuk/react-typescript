import React, { useEffect, useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import EmployeeTable from '../components/EmployeeTable';
import ModalInput from '../components/ModalInput';
import { Employee, EmployeeParams } from '../types/employee';
import Pagination from '../components/Pagination';
import { useHistory, useParams } from 'react-router';

const EmployeeScreen: React.FC = () => {
  const [ maxPage, setMaxPage ] = useState<number>(0);
  const { employees, error, loading, employeesPage, limit, employeesNumber } = useTypedSelector(state => state.employee);
  const { fetchEmployees, deleteEmployeeAC, addEmployeeAC, getEmployeesNumber, setEmployeesPage } = useActions();
  const [ isShowModal, setIsShowModal ] = useState<boolean>(false);

  const history = useHistory();

  const { page } = useParams<EmployeeParams>();

  useEffect(() => {
    getEmployeesNumber();
    fetchEmployees(employeesPage, limit);
  }, []);

  useEffect(() => {
    setEmployeesPage(Number(page));
    fetchEmployees(Number(page), limit);
  }, [page]);

  useEffect(() => {
    setMaxPage(Math.ceil(employeesNumber / limit));
  }, [employeesNumber, limit]);

  const deleteEmployee = async (id: string) => {
    let newPage = employeesPage;
    if (employees.length === 1 && employeesPage > 1) {
      newPage = employeesPage - 1;
      deleteEmployeeAC(id, newPage, limit);
      history.push(`${newPage}`);
    }
    await deleteEmployeeAC(id, employeesPage, limit);
    getEmployeesNumber();
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
      <EmployeeTable
        employees={employees}
        deleteEmployee={deleteEmployee}
      />
      <Pagination
        page={employeesPage}
        limit={limit}
        maxPage={maxPage}
        setPage={setPage}
      />
      {isShowModal &&
        <ModalInput closeModal={() => setIsShowModal(false)} addEmployee={addEmployee} />
      }
      <button onClick={() => setIsShowModal(true)}>
        Add Employee
      </button>
    </div>
  )
}

export default EmployeeScreen;

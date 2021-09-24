import React, { useEffect, useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import EmployeeTable from '../components/EmployeeTable';
import ModalInput from '../components/ModalInput';
import { Employee } from '../types/employee';
import Pagination from '../components/Pagination';

const EmployeeScreen: React.FC = () => {
  const [ maxPage, setMaxPage ] = useState<number>(0);
  const { employees, error, loading, page, limit, employeesNumber } = useTypedSelector(state => state.employee);
  const { fetchEmployees, deleteEmployeeAC, addEmployeeAC, setEmployeesPage, getEmployeesNumber } = useActions();
  const [ isShowModal, setIsShowModal ] = useState<boolean>(false);

  useEffect(() => {
    getEmployeesNumber();
    fetchEmployees(page, limit);
  }, []);

  useEffect(() => {
    setMaxPage(Math.ceil(employeesNumber / limit));
  }, [employeesNumber, limit]);

  const deleteEmployee = (id: string) => {
    deleteEmployeeAC(id);
  }

  const setPage = (pageDif: number) => {
    const newPage = page + pageDif;
    if (newPage && newPage !== page && newPage <= maxPage) {
      setEmployeesPage(newPage);
      fetchEmployees(newPage, limit);
    }
  }

  const addEmployee = (employee: Employee) => {
    const emptyFields = Object.values(employee).filter((item) => !item.length);
    if (emptyFields.length) {
      alert('Please, fill in all fields!');
    } else {
      addEmployeeAC(employee);
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
        page={page}
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

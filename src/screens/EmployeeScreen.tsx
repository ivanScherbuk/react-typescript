import React, { useEffect, useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import EmployeeTable from '../components/EmployeeTable';
import ModalInput from '../components/ModalInput';
import { Employee } from '../types/employee';

const EmployeeScreen: React.FC = () => {
  const { employees, error, loading, page, limit } = useTypedSelector(state => state.employee);
  const { fetchEmployees, deleteEmployeeAC, addEmployeeAC } = useActions();
  const [ isShowModal, setIsShowModal ] = useState<boolean>(false);

  useEffect(() => {
    fetchEmployees(page, limit);
  }, []);

  const deleteEmployee = (id: string) => {
    deleteEmployeeAC(id);
  }

  const addEmployee = (employee: Employee) => {
    addEmployeeAC(employee);
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

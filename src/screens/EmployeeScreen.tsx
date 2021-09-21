import React, { useEffect, useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import EmployeeTable from '../components/EmployeeTable';
import ModalInput from '../components/ModalInput';

const EmployeeScreen: React.FC = () => {
  const { employees, error, loading, page, limit } = useTypedSelector(state => state.employee);
  const { fetchEmployees, deleteEmployeeAC, addEmployee } = useActions();
  const [ isShowModal, setIsShowModal ] = useState<boolean>(false);

  useEffect(() => {
    fetchEmployees(page, limit);
  }, []);

  const deleteEmployee = (id: string) => {
    deleteEmployeeAC(id);
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
        <ModalInput closeModal={() => setIsShowModal(false)} />
      }
      <button onClick={() => setIsShowModal(true)}>
        Add Employee
      </button>
    </div>
  )
}

export default EmployeeScreen;

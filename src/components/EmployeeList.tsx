import React, { useEffect } from 'react'
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import EmployeeTable from './EmployeeTable';

const EmployeeList: React.FC = () => {
  const { employees, error, loading, page, limit } = useTypedSelector(state => state.employee);
  const { fetchEmployees, deleteEmployeeAC, addEmployee } = useActions();

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
      <button>
        Add Employee
      </button>
    </div>
  )
}

export default EmployeeList;

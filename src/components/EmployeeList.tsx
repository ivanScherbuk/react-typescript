import React, { useEffect } from 'react'
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const EmployeeList: React.FC = () => {
  const { employees, error, loading, page, limit } = useTypedSelector(state => state.employee);
  const { fetchEmployees, deleteEmployee, addEmployee } = useActions();

  useEffect(() => {
    fetchEmployees(page, limit);
  }, []);

  function getDate (date: string) {
    const newDate = new Date(date);
    const day = newDate.getDate() + 1;
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();

    return `${day < 10 ? `0${day}` : day}.${month < 10 ? `0${month}` : month}.${year}`;
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Company</th>
            <th>Department</th>
            <th>Position</th>
            <th>Employment Date</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {employees?.map(employee => {
            return (
              <tr key={employee.id}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.company}</td>
                <td>{employee.department}</td>
                <td>{employee.position}</td>
                <td>{getDate(employee.createdAt)}</td>
                <td>
                  <button onClick={() => deleteEmployee(employee.id)}>
                    -
                  </button>
                </td>
              </tr>
          )})}
        </tbody>
      </table>
      <button>
        Add Employee
      </button>
    </div>
  )
}

export default EmployeeList;

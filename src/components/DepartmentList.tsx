import React, { useEffect } from 'react'
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';


const DepartmentList: React.FC = () => {
  const { departments, error, loading } = useTypedSelector(state => state.department);
  const { fetchDepartments } = useActions();

  useEffect(() => {
    fetchDepartments();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {departments?.map(department => {
        return <div key={department.id}>{`${department.name} ${department.employeesNumber}`}</div>
      })}
    </div>
  )
}

export default DepartmentList;

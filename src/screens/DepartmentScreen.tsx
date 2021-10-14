import React, { useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useParams, useHistory } from 'react-router-dom';
import styles from '../styles/Button.module.css';
import { EmployeeParams } from '../types/employee';

const DepartmentScreen: React.FC = () => {
  const { department, error, loading } = useTypedSelector(state => state.department);
  const { setDepartment } = useActions();

  const { id } = useParams<EmployeeParams>();

  const history = useHistory();

  useEffect(() => {
    setDepartment(id);
  }, [id]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
    <table style={{ 'borderWidth':'1px', 'borderColor':'black', 'borderStyle':'solid', 'borderSpacing': '0' }}>
      <tbody>
        <tr>
          <th style={thtdStyle}>Id</th>
          <td style={borderRight0}>{id}</td>
        </tr>
        <tr>
          <th style={thtdStyle}>Department Name</th>
          <td style={borderRight0}>{department?.name}</td>
        </tr>
        <tr>
          <th style={thtdStyle}>Employees Number</th>
          <td style={borderRight0}>{department?.employeesNumber}</td>
        </tr>
        <tr>
          <th style={borderBottom0}>Employment Date</th>
          <td style={borderRight0Bottom0}>{department?.createdAt}</td>
        </tr>
      </tbody>
    </table>
      <button className={styles.button} onClick={() => history.goBack()}>
        <div className={styles.buttonText}>
          Back
        </div>
      </button>
    </div>
  )
}

const thtdStyle = { 'padding': '0.5rem', 'borderBottom': '1px solid black', 'borderRight': '1px solid black' };
const borderRight0 = { 'padding': '0.5rem', 'borderBottom': '1px solid black', 'borderRight': '0px solid black' };
const borderBottom0 = { 'padding': '0.5rem', 'borderBottom': '0px solid black', 'borderRight': '1px solid black' };
const borderRight0Bottom0 = { 'padding': '0.5rem', 'borderBottom': '0px solid black', 'borderRight': '0px solid black' };

export default DepartmentScreen;

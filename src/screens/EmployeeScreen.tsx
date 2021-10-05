import React, { useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { NavLink, useParams, useHistory } from 'react-router-dom';
import styles from '../styles/Button.module.css';
import { EmployeeParams } from '../types/employee';

const EmployeeScreen: React.FC = () => {
  const { employee, error, loading } = useTypedSelector(state => state.employee);
  const { setEmployee } = useActions();

  const { id } = useParams<EmployeeParams>();

  const history = useHistory();

  useEffect(() => {
    console.log(id);
    setEmployee(id);
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
          <td style={borderRight0}>{employee?.id}</td>
        </tr>
        <tr>
          <th style={thtdStyle}>First Name</th>
          <td style={borderRight0}>{employee?.firstName}</td>
        </tr>
        <tr>
          <th style={thtdStyle}>Last Name</th>
          <td style={borderRight0}>{employee?.lastName}</td>
        </tr>
        <tr>
          <th style={thtdStyle}>Company</th>
          <td style={borderRight0}>{employee?.company}</td>
        </tr>
        <tr>
          <th style={thtdStyle}>Department</th>
          <td style={borderRight0}>{employee?.department}</td>
        </tr>
        <tr>
          <th style={thtdStyle}>Position</th>
          <td style={borderRight0}>{employee?.position}</td>
        </tr>
        <tr>
          <th style={borderBottom0}>Employment Date</th>
          <td style={borderRight0Bottom0}>{employee?.createdAt}</td>
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

export default EmployeeScreen;

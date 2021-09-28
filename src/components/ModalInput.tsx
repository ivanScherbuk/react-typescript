import React, { useState } from 'react';
import styles from '../styles/ModalInput.module.css';
import { Employee } from '../types/employee';

interface ModalInputProps {
  closeModal: () => void,
  addEmployee: (employee: Employee) => void,
}

const ModalInput: React.FC<ModalInputProps> = ({ closeModal, addEmployee }) => {
  const [employee, setEmployee] = useState<Employee>({
    firstName: '',
    lastName: '',
    company: '',
    department: '',
    position: '',
  });

  const changeEmployeeData = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
    setEmployee({ ...employee, [key]: e.target.value })
  }

  return (
    <div className={styles.container}>
      <div className={styles.overlay} onClick={closeModal} />
      <div className={styles.card}>
        <div className={styles.property}>
          <p className={styles.propertyText}>
            First Name
          </p>
          <input
            className={styles.propertyField}
            value={employee.firstName}
            onChange={(e) => changeEmployeeData(e, 'firstName')}
            type="text"
          />
        </div>
        <div className={styles.property}>
          <p className={styles.propertyText}>
            Last Name
          </p>
          <input
            className={styles.propertyField}
            value={employee.lastName}
            onChange={(e) => changeEmployeeData(e, 'lastName')}
            type="text"
          />
        </div>
        <div className={styles.property}>
          <p className={styles.propertyText}>
            Company
          </p>
          <input
            className={styles.propertyField}
            value={employee.company}
            onChange={(e) => changeEmployeeData(e, 'company')}
            type="text"
          />
        </div>
        <div className={styles.property}>
          <p className={styles.propertyText}>
            Department
          </p>
          <input
            className={styles.propertyField}
            value={employee.department}
            onChange={(e) => changeEmployeeData(e, 'department')}
            type="text"
          />
        </div>
        <div className={styles.property}>
          <p className={styles.propertyText}>
            Position
          </p>
          <input
            className={styles.propertyField}
            value={employee.position}
            onChange={(e) => changeEmployeeData(e, 'position')}
            type="text"
          />
        </div>
        <button className={styles.button} onClick={() => addEmployee(employee)}>
          Confirm
        </button>
      </div>
    </div>
  );
}

export default ModalInput;

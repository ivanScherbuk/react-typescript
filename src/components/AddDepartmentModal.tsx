import React, { useState } from 'react';
import styles from '../styles/AddEmployeeModal.module.css';
import { Department } from '../types/department';

interface AddDepartmentModalProps {
  closeModal: () => void,
  addDepartment: (department: Department) => void,
}

const AddDepartmentModal: React.FC<AddDepartmentModalProps> = ({ closeModal, addDepartment }) => {
  const [ name, setName ] = useState<string>('');
  const [ number, setNumber ] = useState<string>('');

  const confirmDepartment = () => {
    addDepartment({ name, employeesNumber: Number(number) })
  }

  return (
    <div className={styles.container}>
      <div className={styles.overlay} onClick={closeModal} />
      <div className={styles.card}>
        <div className={styles.property}>
          <p className={styles.propertyText}>
            Department Name
          </p>
          <input
            className={styles.propertyField}
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
        </div>
        <div className={styles.property}>
          <p className={styles.propertyText}>
            Employees Number
          </p>
          <input
            className={styles.propertyField}
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            type="text"
          />
        </div>
        <button className={styles.button} onClick={confirmDepartment}>
          Confirm
        </button>
      </div>
    </div>
  );
}

export default AddDepartmentModal;

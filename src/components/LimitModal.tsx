import React, { useState } from 'react';
import styles from '../styles/AddEmployeeModal.module.css';

interface LimitModalProps {
  closeModal: () => void,
  setLimit: (limit: number) => void,
}

const LimitModal: React.FC<LimitModalProps> = ({ closeModal, setLimit }) => {
  const [limit, changeLimit] = useState<string>();

  const onLimitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeLimit(e.target.value);
  }

  const confirmLimit = () => {
    const limitNumber = Number(limit);
    if (limitNumber > 0 && limitNumber <= 10) {
      window.localStorage.setItem('employeesLimit', String(limitNumber));
      setLimit(limitNumber);
      closeModal();
    } else {
      alert('Please, enter number between 1 and 10!');
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.overlay} onClick={closeModal} />
      <div className={styles.card}>
        <div className={styles.property}>
          <p className={styles.propertyText}>
            Limit
          </p>
          <input
            className={styles.propertyField}
            value={limit}
            onChange={(e) => onLimitChange(e)}
            type="text"
          />
        </div>
        <button className={styles.button} onClick={() => confirmLimit()}>
          Confirm
        </button>
      </div>
    </div>
  );
}

export default LimitModal;

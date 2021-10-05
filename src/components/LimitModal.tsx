import React, { useState } from 'react';
import styles from '../styles/AddEmployeeModal.module.css';

interface LimitModalProps {
  closeModal: () => void,
  setEmployeesLimit: (limit: number) => void,
}

const LimitModal: React.FC<LimitModalProps> = ({ closeModal, setEmployeesLimit }) => {
  const [limit, setLimit] = useState<string>();

  const onLimitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLimit(e.target.value)
  }

  const confirmLimit = () => {
    const limitNumber = Number(limit);
    if (limitNumber > 0) {
      setEmployeesLimit(limitNumber);
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
        <button className={styles.button} onClick={() => confirmLimit}>
          Confirm
        </button>
      </div>
    </div>
  );
}

export default LimitModal;

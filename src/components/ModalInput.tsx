import React, { useState } from 'react';
import styles from '../styles/ModalInput.module.css';

interface ModalInputProps {
  closeModal: () => void,
}

const ModalInput: React.FC<ModalInputProps> = ({ closeModal }) => {
  const [name, setName] = useState<string>('');

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  return (
    <div className={styles.container}>
      <div className={styles.overlay} onClick={closeModal} />
      <div className={styles.card}>
        <input value={name} onChange={changeHandler} type="text" />
      </div>
    </div>
  );
}

export default ModalInput;

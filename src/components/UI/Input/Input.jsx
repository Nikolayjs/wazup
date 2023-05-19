import React from 'react';
import styles from './Input.module.css';

const Input = ({ value, type = 'text', placeholder, onChange, onKeyDown, name }) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };
  const handleSend = (target) => {
    if (target.key === 'Enter' && value) {
      onKeyDown(value);
      onChange({ name: name, value: '' });
    }
  };
  return (
    <div className={styles.mainInputField}>
      <input
        type={type}
        className={styles.mainInput}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onKeyDown={handleSend}
        name={name}
        id={name}
      />
    </div>
  );
};

export default Input;

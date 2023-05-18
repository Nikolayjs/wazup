import React from 'react';
import styles from './Badge.module.css';
const Badge = () => {
  return (
    <div className={styles.badge}>
      <span className={styles.wrapper}></span>
      <div className={styles.content}>1</div>
    </div>
  );
};

export default Badge;

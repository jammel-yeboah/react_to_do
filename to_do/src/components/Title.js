import React from 'react';
import styles from '../Title.module.css';

function Title() {
  return (
    <div>
      <h1 className={styles.title}>Your To-Do List</h1>
    </div>
  );
}

export default Title;
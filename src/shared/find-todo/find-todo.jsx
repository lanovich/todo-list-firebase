import styles from './find-todo.module.css'
import { useState } from 'react';

export const FindTodo = ({ onChange, onClick }) => {
  const [sortDirection, setSortDirection] = useState(false);

  const handleFindValueChange = (e) => {
    onChange(e.target.value)
  }

  const handleSortClick = () => {
    setSortDirection(!sortDirection)
    onClick(sortDirection)
  }

  return (
    <div className={styles.inputContainer}>
      <input 
              className={styles.input}
              id="findTodo"
              type="text"
              onChange={handleFindValueChange}
              placeholder='🔍 Поиск'
              
            />
      <button onClick={handleSortClick} disabled={false} className={styles.buttonSort}>SORT {sortDirection ? 'A-Z' : 'Z-A'}</button>
    </div>
  );
};
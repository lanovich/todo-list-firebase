import { useState } from 'react';
import { InputField, TodosList, FindTodo } from './shared'
import styles from './App.module.css'

function App() {
  const [findValue, setFindValue] = useState('');
  const [sortDirectionAZ, setSortDirectionAZ] = useState(false)

  const handleFindValueChange = (findValue) => {
    setFindValue(findValue)
  }

  const handleSortClick = (sortDirectionAZ) => {
    setSortDirectionAZ(!sortDirectionAZ)
  }

  return (
    <div className={styles.page}>
      <div className={styles.todosContainer}>
        <InputField />
        <FindTodo onChange={handleFindValueChange} onClick={handleSortClick}></FindTodo>
        <TodosList findValue={findValue} sortDirectionAZ={sortDirectionAZ}/>
      </div>
    </div>
  )
}

export default App

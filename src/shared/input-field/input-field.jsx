import styles from './input-field.module.css'
import { useRequestAddTodo, useSanitizedInput } from '../../hooks';

export const InputField = () => {
  const { requestAddTodo } = useRequestAddTodo();
  const { value, handleChange, reset } = useSanitizedInput();
  

  const onSubmit = (event) => {
    event.preventDefault();

    if (value.trim()) {
      requestAddTodo(value.trim());
      reset();
    }
  };

  return (
    <form onSubmit={onSubmit} className={styles.inputContainer}>
      <input 
        className={styles.input}
        id="addTodo"
        type="text"
        value={value}
        onChange={handleChange}
        placeholder='📃 Введите задачу'
        
      />
      <button type="submit" disabled={false} className={styles.buttonAddTask}>ADD</button>
    </form>
  );
};

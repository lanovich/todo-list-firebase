import { useState } from 'react';
import styles from "./todos-list.module.css";
import { PencilLine, Trash2 } from 'lucide-react';
import { Modal } from '../modal/modal'
import { useRequestGetTodosList, useFilterTodos, useRequestDeleteTodo, useRequestUpdateTodo } from '../../hooks';

export const TodosList = ({ findValue, sortDirectionAZ }) => {
  const { todos } = useRequestGetTodosList();
  const { filteredTodos } = useFilterTodos(todos, findValue);
  const { requestDeleteTodo } = useRequestDeleteTodo();
  const { requestUpdateTodo } = useRequestUpdateTodo();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);
  const [editedValue, setEditedValue] = useState('');

  const sortedTodos = [...filteredTodos].sort(([, todo1], [, todo2]) => {
    const value1 = todo1.todoValue.toLowerCase();
    const value2 = todo2.todoValue.toLowerCase();
    return sortDirectionAZ ? value1.localeCompare(value2) : value2.localeCompare(value1);
  });

  const openModal = (id, todoValue) => {
    setCurrentTodo({ id, todoValue });
    setEditedValue(todoValue);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentTodo(null);
    setEditedValue('');
  };

  const handleUpdate = () => {
    if (editedValue.trim()) {
      requestUpdateTodo(currentTodo.id, editedValue.trim());
      closeModal();
    }
  };

  return (
    <div className={styles.todoList}>
      {sortedTodos.map(([id, { todoValue }]) => (
        <div className={styles.todoItem} key={id}>
          <span className={styles.todoText}>{todoValue}</span>
          <div className={styles.todoActions}>
            <button 
              onClick={() => openModal(id, todoValue)} 
              className={styles.edit}
            >
              <PencilLine size={18} />
            </button>
            <button 
              onClick={() => requestDeleteTodo(id)} 
              className={styles.delete}
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      ))}
      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        title="Редактировать задачу"
        setEditedValue={setEditedValue}
        editedValue={editedValue}
        handleUpdate={handleUpdate}
      />
    </div>
  );
};
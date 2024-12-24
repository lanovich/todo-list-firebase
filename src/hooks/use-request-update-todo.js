import { ref, set } from 'firebase/database'
import { db } from '../firebase'

export const useRequestUpdateTodo = () => {
  const requestUpdateTodo = (id, updatedValue) => {
    const todoDbRef = ref(db, `todos/${id}`);

    set(todoDbRef, {
      time: new Date(Date.now()).toLocaleString(),
      todoValue: updatedValue,
    })
  }

  return {
    requestUpdateTodo 
  };
};
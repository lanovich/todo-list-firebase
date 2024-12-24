import { useEffect, useState } from "react";
import { ref, onValue } from 'firebase/database'
import { db } from '../firebase'

export const useRequestGetTodosList = () => {
  const [todos, setTodos] = useState({});

  useEffect(() => {
    const todosDbRef = ref(db, 'todos');

    return onValue(todosDbRef, (snapshot) => {
      const loadedTodos = snapshot.val() || {};
      setTodos(loadedTodos);
    });
  }, []);

  return {
    todos,
  };
};
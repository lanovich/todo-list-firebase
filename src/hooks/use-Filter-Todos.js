import { useEffect, useState } from "react";

export const useFilterTodos = (todos, filterValue) => {
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    if (todos) {
      const filtered = Object.entries(todos).filter(([,{ todoValue }]) => {
        return todoValue.toLowerCase().includes(String(filterValue).toLowerCase());
      });
      setFilteredTodos(filtered);
    }
  }, [todos, filterValue]);

  return {
    filteredTodos
  }
}
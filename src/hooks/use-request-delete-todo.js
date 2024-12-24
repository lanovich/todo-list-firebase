import { db } from "../firebase";
import { ref, remove } from 'firebase/database'

export const useRequestDeleteTodo = () => {
  const requestDeleteTodo = (id) => {
    const removetTodoDbRef = ref(db, `todos/${id}`)
    remove(removetTodoDbRef)
  }

  return {
    requestDeleteTodo
  }
}

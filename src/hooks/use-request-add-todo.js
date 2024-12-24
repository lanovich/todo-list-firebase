import { db } from "../firebase";
import { ref, push } from 'firebase/database'

export const useRequestAddTodo = () => {
  const requestAddTodo = (value) => {
    const todosDbRef = ref(db, 'todos')

    push(todosDbRef, {
      todoValue: value,
      time: new Date(Date.now()).toLocaleString()
    })
  }

  return {
    requestAddTodo
  }
}

import { useState, FormEvent, ChangeEvent } from 'react'
import store from '../redux/store'
import TodoItem from './TodoItem'

const TodoAdd: React.FC = () => {
  const { todoStore } = store.getState()
  return todoStore.map(({ text, id, completed }) => (
    <TodoItem text={text} key={id} id={id} completed={completed} />
  ))
}

export default TodoAdd

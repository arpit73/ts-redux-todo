import { useState, FormEvent, ChangeEvent } from 'react'

import { useSelector } from '../lib/useSelector'
import TodoItem from './TodoItem'

const TodoAdd: React.FC = () => {
  const todoStore = useSelector((state) => state.todoStore)
  return (
    <>
      {todoStore.map(({ text, id, completed }) => (
        <TodoItem text={text} key={id} id={id} completed={completed} />
      ))}
    </>
  )
}

export default TodoAdd

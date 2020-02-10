import { useState, FormEvent, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'

import { addTodo } from '../redux/index'
import uuid from '../lib/uuid'
import { TODO } from '../redux/todos/types'

const TodoAdd: React.FC = () => {
  const [todoText, setTodoText] = useState('')
  const dispatch = useDispatch()

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const value = event.currentTarget.addTodo.value.trim()
    if (!value) {
      return
    }

    const payload: TODO = {
      text: value,
      completed: false,
      id: uuid()
    }

    dispatch(addTodo(payload))
    setTodoText('')
  }

  const onTextChange = ({ currentTarget: { value } }: ChangeEvent<HTMLInputElement>) =>
    setTodoText(value)

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          name="addTodo"
          value={todoText}
          onChange={onTextChange}
          placeholder="Add a new todo !!!"
          autoComplete="off"></input>
        <button type="submit">＋</button>
      </form>
    </>
  )
}

export default TodoAdd

import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { removeTodo, toggleFinished } from '../redux'
import { TODO } from '../redux/todos/types'

const TodoItem: React.FC<TODO> = ({ text, finished, id }) => {
  const dispatch = useDispatch()

  const [isChecked, toggleChecked] = useState(finished)

  const onRemove: VoidFunction = () => {
    dispatch(removeTodo(id))
  }
  const onToggle: VoidFunction = () => {
    toggleChecked(!isChecked)
    dispatch(toggleFinished(id))
  }

  return (
    <div>
      <input type="checkbox" checked={isChecked} onChange={onToggle}></input>
      <span>{text}</span>
      <button onClick={onRemove}>-</button>
    </div>
  )
}

export default TodoItem

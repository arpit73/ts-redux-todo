import { TODO } from '../redux/todos/types'
import { removeTodo } from '../redux'
import { useDispatch } from 'react-redux'

const TodoItem: React.FC<TODO> = ({ text, completed, id }) => {
  const dispatch = useDispatch()

  const onRemove = () => {
    dispatch(removeTodo(id))
  }

  return (
    <div>
      <input type="checkbox" name="completed"></input>
      <span>{text}</span>
      <button onClick={onRemove}>-</button>
    </div>
  )
}

export default TodoItem

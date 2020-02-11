import { useSelector } from '../lib/useSelector'
import TodoItem from './TodoItem'

const TodoAdd: React.FC = () => {
  const todoStore = useSelector((state) => state.todoStore)
  return (
    <>
      {todoStore.map(({ text, id, finished }) => (
        <TodoItem text={text} key={id} id={id} finished={finished} />
      ))}
    </>
  )
}

export default TodoAdd

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { gts } from '../lib/gts'
import { removeTodo, toggleFinished } from '../redux'
import { TODO } from '../redux/todos/types'

const Item = styled.div`
  border: 0;
  outline: 0;
  font-size: ${gts('ruler')};
  border-radius: ${gts('ruler')}*40;
  padding: 1em;
  margin: 1em;
  width: 80%;
  background-color: ${gts('colorBG')};
  text-shadow: 1px 1px 0 ${gts('colorWhite')};
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  color: #61677c;
  font-weight: bold;
  box-shadow: -5px -5px 20px ${gts('colorWhite')}, 5px 5px 20px ${gts('colorShadow')};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    box-shadow: -2px -2px 5px ${gts('colorWhite')}, 2px 2px 5px ${gts('colorShadow')};
  }

  button {
    border-radius: 10em;
    font-size: 1.7em;
  }
`

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
    <Item onClick={onToggle}>
      <input type="checkbox" checked={isChecked} onChange={onToggle}></input>
      <span>{text}</span>
      <button onClick={onRemove}>-</button>
    </Item>
  )
}

export default TodoItem

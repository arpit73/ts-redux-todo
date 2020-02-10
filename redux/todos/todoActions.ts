import { TODO, AddTodo, RemoveTodo, ToggleFinished } from './types'
import { ActionTypes } from './todoActionTypes'

export const addTodo = (todo: TODO): AddTodo => ({
  type: ActionTypes.ADD_TODO,
  payload: todo
})

export const removeTodo = (id: string): RemoveTodo => ({
  type: ActionTypes.REMOVE_TODO,
  payload: id
})

export const toggleFinished = (id: string): ToggleFinished => ({
  type: ActionTypes.TOGGLE_FINISHED,
  payload: id
})

import { ActionTypes } from './todoActionTypes'
import { AddTodo, RemoveTodo, TODO, ToggleFinished } from './types'

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

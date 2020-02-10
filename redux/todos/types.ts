import { ActionTypes } from './todoActionTypes'

export interface TODO {
  readonly text: string
  readonly completed: boolean
  readonly id: string
}

export type State = readonly TODO[]

export interface AddTodo {
  readonly type: ActionTypes.ADD_TODO
  readonly payload: TODO
}

export interface RemoveTodo {
  readonly type: ActionTypes.REMOVE_TODO
  readonly payload: string
}

export interface ToggleFinished {
  readonly type: ActionTypes.TOGGLE_FINISHED
  readonly payload: string
}

export type TodoActions = AddTodo | RemoveTodo | ToggleFinished

import { State, TodoActions, TODO } from './types'
import { ActionTypes } from './todoActionTypes'

const initState: State = [{ text: 'abc', completed: false, id: 'id' }]

const todoReducer = (state: State = initState, action: TodoActions): State => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return [...state, action.payload]

    case ActionTypes.REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload)

    case ActionTypes.TOGGLE_FINISHED:
      return state.map((todo) =>
        todo.id === action.payload
          ? {
              ...todo,
              completed: !todo.completed
            }
          : todo
      )

    default:
      return state
  }
}

export default todoReducer

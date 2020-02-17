import { ActionTypes } from './todoActionTypes'
import { State, TodoActions } from './types'

const initState: State = [{ text: 'An example todo', finished: false, id: 'id' }]

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
              finished: !todo.finished
            }
          : todo
      )

    default:
      return state
  }
}

export default todoReducer

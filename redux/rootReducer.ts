import { combineReducers } from 'redux'

import todoReducer from './todos/todoReducer'

const rootReducer = combineReducers({
  todoStore: todoReducer
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer

import { Provider } from 'react-redux'

import TodoAdd from '../components/TodoAdd'
import TodoList from '../components/TodoList'
import store from '../redux/store'

const Home: React.FC = () => (
  <Provider store={store}>
    <TodoAdd />
    <TodoList />
  </Provider>
)

export default Home

import { Provider } from 'react-redux'
import store from '../redux/store'
import TodoAdd from '../components/TodoAdd'
import TodoList from '../components/TodoList'

const Home: React.FC = () => (
  <Provider store={store}>
    <div>Hello</div>
    <TodoAdd />
    <TodoList />
  </Provider>
)

export default Home

import { Provider } from 'react-redux'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

import GlobalStyle from '../components/styles/GlobalStyle'
import { theme } from '../components/styles/theme'
import TodoAdd from '../components/TodoAdd'
import TodoList from '../components/TodoList'
import store from '../redux/store'

const TodoApp = styled.div`
  margin: 0 auto;
`

const Home: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <GlobalStyle />
      <TodoApp>
        <TodoAdd />
        <TodoList />
      </TodoApp>
    </Provider>
  </ThemeProvider>
)

export default Home

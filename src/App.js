import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
//components
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
//images
import addTodoIcon from './img/Plus.svg';

function App() {
  const getLocalTodos = () => {
    const localTodos = JSON.parse(localStorage.getItem('todos'));
    if (localTodos) {
      return localTodos;
    } else {
      return [];
    }
  };
  const [todos, setTodos] = useState(getLocalTodos());
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  saveLocalTodos();

  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/'>
            {todos && <TodoList todos={todos} setTodos={setTodos} />}
            <Link to='/add'>
              <button className='add-todo'>
                <img src={addTodoIcon} alt='add to-do' />
              </button>
            </Link>
          </Route>
          <Route exact path='/add'>
            <AddTodo todos={todos} setTodos={setTodos} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

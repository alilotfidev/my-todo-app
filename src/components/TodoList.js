import '../css/TodoList.css';
import doneImage from '../img/done.svg';
import closeIcon from '../img/Close Square.svg';

const TodoList = ({ todos, setTodos }) => {
  const changeTodoStatus = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          done: !todo.done,
        };
      }
      return todo;
    });

    setTodos(newTodos);
  };
  const deleteTodos = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className='todo-list-container'>
      <div className='title'>Today's Tasks</div>
      <ul className='todo-list'>
        {todos.map((todo) => (
          <li className='todo' key={todo.id}>
            <div
              className={`circle ${
                todo.done ? `completed-todo-circle-${todo.color}` : ''
              }`}
              style={{ border: `2px solid var(--${todo.color}-color)` }}
              onClick={() => changeTodoStatus(todo.id)}
            >
              <img className='done' src={doneImage} alt='done' />
            </div>
            <div className='todo-text-parent'>
              <p
                className={`todo-text ${
                  todo.done ? 'completed-todo-text' : ''
                }`}
                onClick={() => changeTodoStatus(todo.id)}
              >
                {todo.text}
              </p>
            </div>
            <img
              src={closeIcon}
              alt='delete todo'
              className='delete-todo'
              onClick={() => deleteTodos(todo.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

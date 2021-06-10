import '../css/AddTodo.css';
//images
import closeIcon from '../img/Close Square.svg';
import arrowIcon from '../img/Arrow - Up 2.svg';
import { useHistory } from 'react-router';
import { useState } from 'react';
const AddTodo = ({ todos, setTodos }) => {
  const history = useHistory();
  const [colorDisplay, setColorDisplay] = useState(false);
  const [todoColor, setTodoColor] = useState('primary');
  const [todoText, setTodoText] = useState('');

  const goToHomePage = () => {
    history.push('/');
  };
  const showColors = () => {
    setColorDisplay(!colorDisplay);
  };
  const setColor = (e) => {
    if (e.target.classList.contains('color')) {
      setTodoColor(e.target.classList[1]);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const id = todos ? todos.length + 1 : 1;
    const todo = {
      color: todoColor,
      text: todoText,
      done: false,
      id,
    };
    todos ? setTodos([...todos, todo]) : setTodos([todo]);
    goToHomePage();
  };
  return (
    <div className='add-todo-container'>
      <div className='close-popup' onClick={goToHomePage}>
        <img src={closeIcon} alt='close' />
      </div>

      <form className='add-todo-form' onSubmit={submitHandler}>
        <input
          type='text'
          placeholder='Enter new task'
          name='task'
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <div className='get-color'>
          <div className='placeholder-color'>
            <div className='placeholder-color-text'>Color:</div>
            <div
              className={`selected-color ${todoColor}`}
              onClick={showColors}
            ></div>
          </div>
          <div
            id='color-list'
            className={`colors ${colorDisplay ? 'active' : ''}`}
            onClick={setColor}
          >
            <div className='color primary'></div>
            <div className='color red'></div>
            <div className='color orange'></div>
            <div className='color green'></div>
          </div>
        </div>
        <button type='submit'>
          New task <img src={arrowIcon} alt='up' />
        </button>
      </form>
    </div>
  );
};

export default AddTodo;

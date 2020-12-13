import React from "react";

const Form = ({ inputText, setInputText, todos, setTodos }) => {
  const submitTodo = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.random() * 1000,
      },
    ]);
    setInputText("");
  };
  return (
    <div className='form'>
      <form>
        <input
          type='text'
          className='todo-input'
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />

        <button onClick={submitTodo} className='todo-button' type='submit'>
          <i className='fas fa-plus-square'></i>
        </button>
      </form>
    </div>
  );
};

export default Form;

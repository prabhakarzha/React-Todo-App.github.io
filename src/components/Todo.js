import React from "react";
import { motion } from "framer-motion";

const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteTodo = () => {
    setTodos(todos.filter((item) => item.id !== todo.id));
    const Sonu= {
      animate: { x: 20 },
      transition :{ duration: 0.1 }
    }
  };

  const completedTodo = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <motion.div
      animate={{ x: 20 }}
      className='todo'
    >
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={completedTodo} className='complete-btn'>
        <i className='fas fa-check'></i>
      </button>
      <button
        onClick={deleteTodo}
        className='trash-btn'
      >
        <i className='fas fa-trash'></i>
      </button>
    </motion.div>
  );
};

export default Todo;

import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, onDelete, moveDone }) => {
  return (
    <div className="todoList">
      <div className="working">
        <h2>Working🏃‍♀️</h2>

        {todos.map((todo) => {
          if (todo.isDone === false) {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                onDelete={onDelete}
                moveDone={moveDone}
              />
            );
          }
        })}
      </div>

      <div className="done">
        <h2>Done🎶</h2>
        {todos.map((todo) => {
          if (todo.isDone === true) {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                onDelete={onDelete}
                moveDone={moveDone}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default TodoList;

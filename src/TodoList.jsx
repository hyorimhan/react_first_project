import React from 'react';

const TodoList = ({ todos, onDelete, moveDone }) => {
  return (
    <div className="todoList">
      <div className="working">
        <h2>Working🏃‍♀️</h2>

        {todos.map((el) => {
          if (el.isDone === false) {
            return (
              <div className="workingTodo" key={el.id}>
                <h3>{el.title}</h3>
                <p>{el.contents}</p>
                <div className="workingBtn">
                  <button
                    className="deleteBtn"
                    onClick={() => {
                      onDelete(el.id);
                    }}
                  >
                    delete
                  </button>
                  <button className="doneBtn" onClick={() => moveDone(el.id)}>
                    Done
                  </button>
                </div>
              </div>
            );
          }
        })}
      </div>

      <div className="done">
        <h2>Done🎶</h2>
        {todos.map((el) => {
          if (el.isDone === true) {
            return (
              <div className="workingTodo" key={el.id}>
                <h3>{el.title}</h3>
                <p>{el.contents}</p>
                <div className="workingBtn">
                  <button
                    className="deleteBtn"
                    onClick={() => {
                      onDelete(el.id);
                    }}
                  >
                    delete
                  </button>
                  <button className="doneBtn" onClick={() => moveDone(el.id)}>
                    working
                  </button>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default TodoList;

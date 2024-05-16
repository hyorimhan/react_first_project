import React from 'react';

const Todo = ({ todo, onDelete, moveDone }) => {
  return (
    <div className="workingTodo" key={todo.id}>
      <h3>{todo.title}</h3>
      <p>{todo.contents}</p>
      <div className="workingBtn">
        <button
          className="deleteBtn"
          onClick={() => {
            onDelete(todo.id);
          }}
        >
          삭제
        </button>
        <button className="doneBtn" onClick={() => moveDone(todo.id)}>
          미완료 ↔️ 완료
        </button>
      </div>
    </div>
  );
};

export default Todo;

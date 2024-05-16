import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
  const [title, setTitle] = useState(''); // 제목
  const [contents, setContents] = useState(''); // 내용
  const [todos, setTodo] = useState([]); // 할 일 목록

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onContentsChange = (e) => {
    setContents(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      title: title,
      contents: contents,
      id: new Date().getTime(),
      isDone: false,
    };
    if (title && contents !== '') {
      setTodo((prev) => [...prev, newTodo]);
      setTitle('');
      setContents('');
    } else {
      alert('입력된 값이 없습니다');
    }
  };

  const moveDone = (clickedId) => {
    const updateDone = todos.map((todo) => {
      if (todo.id === clickedId) {
        return { ...todo, isDone: !todo.isDone };
      }
      return todo;
      if (todo.isDone === false) {
        ('Working');
      }
      ('Done');
    });
    setTodo(updateDone);
  };

  const onDelete = (clickedId) => {
    const filteredTodos = todos.filter((todo) => todo.id !== clickedId);
    setTodo(filteredTodos);
  };

  return (
    <>
      <div className="layout">
        <Header />
        <TodoForm
          title={title}
          contents={contents}
          onTitleChange={onTitleChange}
          onContentsChange={onContentsChange}
          onSubmit={onSubmit}
        />
        <TodoList todos={todos} onDelete={onDelete} moveDone={moveDone} />
      </div>
    </>
  );
}

export default App;

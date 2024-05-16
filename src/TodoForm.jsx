import React from 'react';

function TodoForm({
  title,
  contents,
  onContentsChange,
  onSubmit,
  onTitleChange,
}) {
  return (
    <form className="addTodo" onSubmit={onSubmit}>
      <input
        type="text"
        className="inputTitle"
        placeholder="제목"
        value={title}
        onChange={onTitleChange} // 입력 값이 바뀌면 호출
      />
      <input
        type="text"
        className="inputContents"
        placeholder="내용"
        value={contents}
        onChange={onContentsChange}
      />

      <button className="addBtn">추가하기</button>
    </form>
  );
}

export default TodoForm;

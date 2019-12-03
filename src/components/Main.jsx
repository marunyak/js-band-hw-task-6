import React from 'react';
import Filter from './Filter';
import TaskList from './TaskList';

function Main(props) {
  const {
    todos,
    onDeleted,
    onDone,
    onEdit
  } = props;
  return (
    <main className="container">
      <Filter />
      <TaskList todo={todos} onDeleted={onDeleted} onDone={onDone} onEdit={onEdit} />
    </main>
  );
}
export default Main;

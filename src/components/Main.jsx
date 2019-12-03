import React from 'react';
import Filter from './Filter';
import TaskList from './TaskList';

function Main(props) {
  const {
    todos,
    onDeleted,
    onDone
  } = props;
  return (
    <main className="container">
      <Filter />
      <TaskList todo={todos} onDeleted={onDeleted} onDone={onDone} />
    </main>
  );
}
export default Main;

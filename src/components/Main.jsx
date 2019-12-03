import React from 'react';
import Filter from './Filter';
import TaskList from './TaskList';

function Main(props) {
  const {
    todos,
    onDeleted
  } = props;
  return (
    <main className="container">
      <Filter />
      <TaskList todo={todos} onDeleted={onDeleted} />
    </main>
  );
}
export default Main;

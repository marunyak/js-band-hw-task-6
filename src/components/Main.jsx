import React from 'react';
import Filter from './Filter';
import TaskList from './TaskList';

function Main(props) {
  const {
    todos
  } = props;
  return (
    <main className="container">
      <Filter />
      <TaskList todo={todos} />
    </main>
  );
}
export default Main;

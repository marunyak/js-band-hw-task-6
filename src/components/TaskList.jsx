import React from 'react';
import Task from './Task';

function TaskList(props) {
  const {
    todo
  } = props;
  const { items, filter } = todo;
  const high = [];
  const normal = [];
  const low = [];
  const done = [];

  items.forEach((item) => {
    if (item.done === true) done.push(item);
    else if (item.priority === 'high') high.push(item);
    else if (item.priority === 'normal') normal.push(item);
    else if (item.priority === 'low') low.push(item);
  });

  const newItems = high.concat(normal, low, done);
  const list = newItems.filter((item) => (filter.search === ''
                            || item.title.toLowerCase()
                              .search(new RegExp(`^${filter.search.toLowerCase()}`, 'g')) !== -1))
    .filter((item, index, arr) => (filter.open === 'all'
                            || (filter.open === 'open' && arr[index].done === false)
                            || (filter.open === 'done' && arr[index].done === true)))
    .filter((item, index, arr) => (filter.priority === 'all'
                            || arr[index].priority === filter.priority));
  const newItem = list.map((item) => (
    <Task
      key={item.id}
      item={item}
    />
  ));

  return (
    <div className="task-list row mt-5">
      {newItem}
    </div>
  );
}
export default TaskList;

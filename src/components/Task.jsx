import React from 'react';

function Task(props) {
  const {
    item, onDeleted, onDone, onEdit
  } = props;
  const colors = { low: 'bg-primary', normal: 'bg-warning', high: 'bg-danger' };
  let background = 'task col-sm-3 shadow rounded p-3 mr-3 mb-4 ';
  background += item.done ? 'bg-success text-white task-done' : 'bg-white text-black ';

  return (
    <div className={background} style={{ height: '250px' }} data={item.id}>
      <h3 className="title">{item.title}</h3>
      <p className="text mb-6 text-break">{item.description}</p>
      <div className="settings">
        <div className="d-flex justify-content-between mb-1">
          <button
            type="button"
            className={`btn status-priority text-white ${colors[item.priority]}`}
          >
            {item.priority}
          </button>
          <button type="button" className="btn btn-warning dropdown-toggle text-white" data-toggle="dropdown">
              ...
          </button>
          <div className="dropdown-menu options-list">
            <div className="dropdown-item done" onClick={onDone}>done</div>
            <div
              className="dropdown-item edit"
              onClick={onEdit}
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
edit

            </div>
            <div className="dropdown-item delete" onClick={onDeleted}>delete</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Task;

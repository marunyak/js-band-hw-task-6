import React from 'react';

function Filter(props) {
  const { onFilter } = props;
  return (
    <nav className="filter row mt-4">
      <div className="col">
        <input type="text" onChange={onFilter} name="search" className="form-control" placeholder="Search by title" />
      </div>
      <div className="col">
        <select name="open" className="form-control" onChange={onFilter}>
          <option value="all">all</option>
          <option value="open">open</option>
          <option value="done">done</option>
        </select>
      </div>
      <div className="col">
        <select name="priority" className="form-control" onChange={onFilter}>
          <option value="all">all</option>
          <option value="high">high</option>
          <option value="normal">normal</option>
          <option value="low">low</option>
        </select>
      </div>
      <button type="button" className="btn btn-success" data-toggle="modal" data-target="#exampleModalCenter">
  Create
      </button>
    </nav>
  );
}
export default Filter;

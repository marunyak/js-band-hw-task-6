import React from 'react';

function CreateTask(props) {
  const { onSave } = props;
  return (
    <div className="modal fade" id="exampleModalCenter" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">Create/Edit</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form className="create-task-form">
              <div className="form-group">
                <label htmlFor="title" style={{ display: 'block' }}>
Title:
                  <input name="title" type="text" className="form-control" placeholder="Title" required />
                </label>
                <div className="invalid-feedback">
        Please enter title!
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="description" style={{ display: 'block' }}>
Description:
                  <textarea
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="Description"
                    required
                  />
                  <div className="invalid-feedback">
        Please enter description!
                  </div>
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="priority" style={{ display: 'block' }}>
Priority:
                  <select name="priority" className="form-control">
                    <option value="high">High</option>
                    <option value="normal">Normal</option>
                    <option value="low">Low</option>
                  </select>
                </label>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-warning text-white" data-dismiss="modal">Close</button>
            <button
              type="button"
              className="btn btn-success"
              onClick={onSave}
              data-dismiss="modal"
            >
Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CreateTask;

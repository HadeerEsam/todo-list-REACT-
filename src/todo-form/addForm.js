function AddForm(props) {
  return (
    <form onSubmit={props.submit} className="w-75 mb-5">
      <div className="mb-3">
        <label htmlFor="taskInput" className="form-label">Enter your task:</label>
        <input type="text" id="taskInput" className="form-control"/>
      </div>
      <p className="text-danger text-small">{props.error}</p>
      <button  className="btn btn-info">Add Task</button>
    </form>
  );
}
export default AddForm;

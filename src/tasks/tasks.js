import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
function TasksTable(props) {
  let taskList;
  if (props.task.taskList.length > 0) {
    taskList = props.task.taskList.map((ele, i) => {
      return (
        <div
          key={i}
          className="d-flex flex-column flex-md-row justify-content-between mb-4 border rounded p-4"
        >
          <div>
            <p>Task : {ele.name}</p>
            <p>
              Status : {ele.status.toString()}
              {ele.status === true ? (
                <FontAwesomeIcon className="text-success ml-2" icon={faCheck} />
              ) : null}
            </p>
          </div>
          <div className="  text-right ">
            {ele.status === false ? (
              <button
                onClick={() => {
                  props.done(i);
                }}
                className="btn btn-success mr-1  mb-3"
              >
                Done
              </button>
            ) : null}
            {ele.status === false ? (
              <button
                onClick={() => {
                  props.update(i);
                }}
                className="btn   btn-warning mr-1 mb-3"
              >
                Update
              </button>
            ) : null}
            <button
              onClick={() => {
                props.delete(i);
              }}
              className="btn  btn-danger  mb-3 mr-1 "
            >
              Delete
            </button>
          </div>
        </div>
      );
    });
    return <div>{taskList}</div>;
  } else {
    return (
      <div className="border rounded p-4 text-center text-danger font-weight-bold">
        <p>No Tasks Found</p>
      </div>
    );
  }
}
export default TasksTable;

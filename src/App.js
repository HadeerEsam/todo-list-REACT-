import React, { useState, state } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import {Button} from 'react-bootstrap';
import AddForm from "./todo-form/addForm";
import UpdateForm from "./todo-form/updateForm";
import TasksTable from "./tasks/tasks";

function App() {
  const [task, setTask] = useState({
    taskList: [],
    showError: null,
    updatedValue: "",
    showForm: true,
  });
  const handleAddTask = (e) => {
    e.preventDefault();
    const tasks = task.taskList;
    if (isNaN(e.target[0].value)) {
      tasks.push({
        name: e.target[0].value,
        status: false,
      });
      setTask({
        taskList: tasks,
        showError: null,
        updatedValue: "",
        showForm: true,
      });
    } else {
      setTask({
        taskList: tasks,
        showError: "Only letters allowed!!",
        updatedValue: "",
        showForm: true,
      });
    }
  };
  const handleDone = (id) => {
    const tasks = task.taskList;
    tasks[id].status = true;
    setTask({
      taskList: tasks,
      showError: null,
      updatedValue: "",
      showForm: true,
    });
  };
  const handleDelete = (id) => {
    const tasks = task.taskList;
    tasks.splice(id, 1);
    setTask({
      taskList: tasks,
      updatedValue: "",
      showForm: true,
      showError: null,
    });
  };
  const handleUpdate = (id) => {
    const tasks = task.taskList;
    setTask({
      taskList: tasks,
      showError: null,
      updatedValue: tasks[id].name,
      showForm: false,
      id: id
    });
  };
  const handleUpdatedTask = (e) => {
    e.preventDefault();
    const tasks = task.taskList;
    if (isNaN(e.target[0].value)) {
      tasks[task.id] = {
        name: e.target[0].value,
        status: false,
        updatedValue: "",
        showForm: true,
      };
      setTask({
        taskList: tasks,
        showError: null,
        showForm: true,
        updatedValue: "",
        id:task.id
      });
    } else {
      setTask({
        taskList: tasks,
        showError: "Only letters allowed!!",
        updatedValue: "",
        showForm: false,
        id:task.id
      });
    }
  };
 
  return (
    <section className="App  container py-5">
      {/* <Button variant="success">Success</Button> */}
      <h1 className="text-info text-center font-weight-bold text-lg-left mb-5">
        To Do List
      </h1>
      {console.log(task.showForm)}
      {task.showForm === true ? (
        <AddForm submit={handleAddTask} error={task.showError} />
      ) : (
        <UpdateForm
          submit={handleUpdatedTask}
          error={task.showError}
          value={task.updatedValue}
        />
      )}
      <TasksTable
        task={task}
        delete={handleDelete}
        done={handleDone}
        update={handleUpdate}
      />
    </section>
  );
}

export default App;

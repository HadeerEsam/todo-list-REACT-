
import React , {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Button} from 'react-bootstrap';
import ToDoForm from './todo-form/form';
import TasksTable from "./tasks/tasks";



function App() {
  const [task,setTask]= useState({
    name:null,
    status:false
  });
  return (
    <section className="App container py-5">
      {/* <Button variant="success">Success</Button> */}
      
      <ToDoForm />
      <TasksTable />

    </section>
  );
}

export default App;

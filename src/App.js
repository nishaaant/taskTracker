import Header from "./components/Header";
import Task from "./components/Task";
import { useState } from "react";
import Addtask from "./components/Addtask";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Docter Appointment",
      day: "feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at school",
      day: "feb 6th at 12:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food shoping",
      day: "feb 5th at 2:30pm",
      reminder: false,
    },
  ])
  // Add task
  const Taskadded = (task) => {
   const id = Math.floor(Math.random() * 10000)+1;
   const newTask = { id, ...task }
   setTasks([...tasks, newTask])
  }
  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => 
        task.id === id ? 
        { 
          ...task,
           reminder: !task.reminder
        } 
        : task
      )
    );
  };
  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
     {showAddTask && <Addtask onAdd= {Taskadded}/>}
      {tasks.length > 0 ? (
        <Task tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "no task"
      )}
    </div>
  );
};
export default App;

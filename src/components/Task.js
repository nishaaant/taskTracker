import Tsk from "./Tsk"

const Task = ({tasks, onDelete, onToggle}) => {
   
    return (
        <>
         {tasks.map((task) => (
         <Tsk key = {task.id} task= {task} onDelete= {onDelete} onToggle= {onToggle}/>
         ))}   
        </>
    )
}

export default Task

import axios from 'axios';
import React, {useState, useEffect} from 'react'
import CreateTask from "./Components/CreateTask";

function App() {
  const [Tasks, setTasks] = useState([])
  let fetchTasks = async () => {
    let taskResp = await axios.get('/Task');
    setTasks(taskResp.data.data)
  }
  useEffect(() => {
    fetchTasks()
  },[])

  const handleDelete = async (e) => {
    let delResp = await axios.delete('/Task', { headers :{_id: e.target.id}})
    console.log({delResp})
    fetchTasks()
  }
  return (
    <div>
      <CreateTask/>
      {
        Tasks && Tasks.map(task => (
          <div style={{display: 'flex', gap:'10px', margin: '10px'}}>
            <input type='text' value={task.Title} />
            <button className="CreateTaskButton" id={task._id} onClick={(e) => handleDelete(e)}>X</button>
            <button className="CreateTaskButton">Update Task</button>
          </div>
        ))
      }
    </div>
  );
}

export default App;
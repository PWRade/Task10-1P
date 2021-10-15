import React, {useState} from 'react'; 
import TaskType from './TaskType';
import TaskDetails from './TaskDetails';
import TaskImage from './TaskImage';
import TaskSetup from './TaskSetup';
import TaskPrice from './TaskPrice';
import TaskButton from './TaskButton';
import './tasksheet.css';

const PostTask = (props) =>{

    const [isOnline, setOnline] = useState(true)
    const [task, setTask] = useState({
        task_type: 'in_person',
        taskTitle: '',
        taskDescription: '',
        taskSuburb: null,
        taskDate: null,
        price: '',
        taskPrice: ''
    })

    const handleTaskChange = (event)=>{
        const {name, value} = event.target;
            if(value === 'online'){
                setOnline(false)
            }
            else if (value === 'in_person'){
                setOnline(true)
            }
        setTask((preValue)=>{

            return{
                ...preValue,
                [name]: value
            }
        })
    }

    const handleRegisterTask = ()=>{
        fetch('http://localhost:5000/posttask', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body : JSON.stringify({
            task_type: task.task_type,
            taskTitle: task.taskTitle,
            taskDescription: task.taskDescription,
            taskSuburb: task.taskSuburb,
            taskDate: task.taskDate,
            price: task.price,
            taskPrice: task.taskPrice
          })
        })
        .then(response => response.json())
        .then(console.log(task))
        .then(data => console.log(data))
        .catch(err => {
          console.log("Error:" + err)
        })
      }

    return <div className="post-task-form">

        <TaskType
        name = "task_type"
        onChange = {handleTaskChange}
        />

        <TaskDetails
        onChange = {handleTaskChange}
        />

        {
        isOnline ?
        <TaskSetup
        onChange = {handleTaskChange}
        />
        :
        <div></div>
        }

        <TaskPrice
        onChange = {handleTaskChange}
        />

        <TaskButton
        text = 'Post Task'
        onClick = {handleRegisterTask}
        />

    </div>

}
export default PostTask
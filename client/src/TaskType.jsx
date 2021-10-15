import React from 'react';
/*import './tasksheet.css';*/

function TaskType(props)
{
    return <div className="task-container">
        <div>
            <h4>New Task</h4>
        </div>
        <div onChange={props.onChange}>
            <p>Select Task Type:</p>
                <input type="radio" id="person" name={props.name} defaultChecked value="in_person" />
                <label htmlFor="person">in Person</label>
                <input type="radio" id="online" name={props.name} value="online" />
                <label htmlFor="online">Online</label>
        </div>
    </div>;
}

export default TaskType;
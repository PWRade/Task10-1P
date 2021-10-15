import React from 'react';
import './tasksheet.css';

function TaskButton(props)
{
    return <div className="task-container">

        <div className="button-div">
            <button type="submit" className="post-task-button" onClick={props.onClick}>{props.text}</button>
        </div>
        
    </div>;
}

export default TaskButton;
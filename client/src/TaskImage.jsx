import React from 'react';
/*import './tasksheet.css';*/

function TaskImage(props)
{
    return <div className="task-container">
        <div>
            <h4>Upload Image</h4>
        </div>
        <div>
            <label for="taskImage">Add an Image: </label>
            <input type="text" id="taskImage" name="taskImage" />
        </div>
    </div>;
}

export default TaskImage;
import React from 'react';
/*import './tasksheet.css';*/

function TaskDetails(props)
{
    return <div className="task-container">
        <div>
            <h4>Describe Your Task to Experts</h4>
        </div>
        <table onChange={props.onChange}>
            <tbody>
                <tr>
                    <th><label htmlFor="taskTitle">Task Title:</label></th>
                    <td><input type="text" id="taskTitle" name="taskTitle" placeholder="Enter Task Title"/></td>
                </tr>
                <tr>
                    <th><label htmlFor="taskDescription">Task Description:</label></th>
                    <td><textarea id="taskDescription" name="taskDescription" placeholder="Enter Task Description"></textarea></td>
                </tr>
            </tbody>
        </table>
    </div>;
}

export default TaskDetails;
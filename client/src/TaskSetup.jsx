import React from 'react';
import './tasksheet.css';

function TaskSetup(props)
{
    return <div className="task-container">
        <div>
            <h4>Setting up your Task</h4>
        </div>
        <table onChange={props.onChange}>
            <tbody>
                <tr>
                    <th><label htmlFor="taskSuburb">Suburb:</label></th>
                    <td><input type="text" id="taskSuburb" name="taskSuburb" value={props.suburb} placeholder="Enter a Suburb" /></td>
                </tr>
                <tr>
                    <th><label htmlFor="taskDate">Date:</label></th>
                    <td><input type="date" id="taskDate" name="taskDate" value={props.date} /></td>
                </tr>
            </tbody>
        </table>
    </div>;
}

export default TaskSetup;
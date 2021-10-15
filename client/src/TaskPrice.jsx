import React from 'react';
import './tasksheet.css';

function TaskPrice(props)
{
    return <div className="task-container" onChange={props.onChange}>
        <div>
            <h4>Suggest how much</h4>
        </div>
        <div>
            <p>What is your estimated budget?</p>
            <input type="radio" id="total" name="price" value="total" />
            <label htmlFor="total">Total</label>
            <input type="radio" id="hourlyRate" name="price" value="hourlyRate" />
            <label htmlFor="hourlyRate">Hourly Rate</label>
        </div>
        <br />
        <table>
            <tbody>
                <tr>
                    <td><input type="number" id="taskPrice" name="taskPrice" placeholder="$" /></td>
                </tr>
            </tbody>
        </table>
    </div>;
}

export default TaskPrice;
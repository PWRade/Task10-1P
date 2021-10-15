const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema(
    {
        task_type: {
            type: String
        },
        task_title: {
            type: String,
            minlength: 2,
            maxlength: 50
        },
        task_description: {
            type: String
        },
        task_suburb: {
            type: String
        },
        task_date: {
            type: String
        },
        task_budget: {
            type: String
        },
        task_price: {
            type: Number
        }
    }
)

module.exports = mongoose.model("tasks", taskSchema)
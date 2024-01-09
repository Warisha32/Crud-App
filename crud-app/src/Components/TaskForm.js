import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions/taskActions';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const TaskForm = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState({ title: '', description: '', dueDate: new Date(), priority: '' });

  const handleInputChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date) => {
    setTask({ ...task, dueDate: date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({ ...task, id: new Date().getTime(), completed: false }));
    setTask({ title: '', description: '', dueDate: new Date(), priority: '' });
  };

  return (
    <div className="bg-white p-8 rounded-md mb-8">
      <h2 className="text-2xl font-bold mb-4">Add New Task</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <label className="text-sm font-semibold">Title:</label>
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleInputChange}
          className="p-2 border rounded-md"
          required
        />

        <label className="text-sm font-semibold">Description:</label>
        <textarea
          name="description"
          value={task.description}
          onChange={handleInputChange}
          className="p-2 border rounded-md"
        />

        <label className="text-sm font-semibold">Due Date:</label>
        <DatePicker
          selected={task.dueDate}
          onChange={handleDateChange}
          className="p-2 border rounded-md"
          required
        />

        <label className="text-sm font-semibold">Priority:</label>
        <select
          name="priority"
          value={task.priority}
          onChange={handleInputChange}
          className="p-2 border rounded-md"
          required
        >
          <option value="">Select Priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <button type="submit" className="bg-green-500 text-white border-none py-2 px-4 rounded-md cursor-pointer">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;

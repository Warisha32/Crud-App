import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask, deleteTask, completeTask } from '../actions/taskActions';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({ title: task.title, description: task.description });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    dispatch(editTask(task.id, { ...task, title: editedTask.title, description: editedTask.description }));
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedTask({ title: task.title, description: task.description });
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleComplete = () => {
    dispatch(completeTask(task.id));
  };

  const handleChange = (e) => {
    setEditedTask({ ...editedTask, [e.target.name]: e.target.value });
  };

  return (
    <li className={`task-item ${task.completed ? 'bg-green-100' : 'bg-yellow-100'} p-4 mb-4 rounded-md`}>
      {isEditing ? (
        <div className="mt-4">
          <input
            type="text"
            name="title"
            value={editedTask.title}
            onChange={handleChange}
            className="p-2 mb-2 border rounded w-full focus:outline-none focus:ring focus:border-blue-300"
          />
          <textarea
            name="description"
            value={editedTask.description}
            onChange={handleChange}
            className="p-2 border rounded w-full resize-none focus:outline-none focus:ring focus:border-blue-300"
          />
          <div className="flex justify-end mt-2">
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded mr-2 hover:bg-blue-600"
              onClick={handleSaveEdit}
            >
              Save
            </button>
            <button
              className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
              onClick={handleCancelEdit}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div>
          <strong>{task.title}</strong>
          <p>{task.description}</p>
          <span className={`text-sm font-semibold ${task.completed ? 'text-green-600' : 'text-yellow-600'}`}>
            {task.completed ? 'Completed' : 'In Progress'}
          </span>
        </div>
      )}

      <div className="mt-4">
        <button
          className="bg-yellow-500 text-white py-2 px-4 rounded mr-2 hover:bg-yellow-600"
          onClick={handleEdit}
        >
          Edit
        </button>
        <button
          className="bg-red-500 text-white py-2 px-4 mr-2 rounded hover:bg-red-600"
          onClick={handleDelete}
        >
          Delete
        </button>
        <button
          className={`bg-green-500 text-white py-2 px-4 rounded ${task.completed ? 'hover:bg-green-600' : 'hover:bg-blue-600'}`}
          onClick={handleComplete}
        >
          {task.completed ? 'Undo' : 'Complete'}
        </button>
      </div>
    </li>
  );
};

export default TaskItem;

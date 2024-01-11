import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

const TaskList = () => {
  // Accessing the tasks array from the Redux store
  const tasks = useSelector((state) => state.tasks.tasks);

  // State for handling search term input
  const [searchTerm, setSearchTerm] = useState('');

  // State for handling selected priority filter
  const [selectedPriority, setSelectedPriority] = useState('');

  // State for handling selected task state filter
  const [selectedTaskState, setSelectedTaskState] = useState('');

  // Filtering tasks based on search term, selected priority, and task state
  let filteredTasks = tasks
    .filter((task) => task.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((task) => !selectedPriority || task.priority === selectedPriority)
    .filter((task) => !selectedTaskState || task.completed === (selectedTaskState === 'completed'));

  // Sorting tasks by due date and priority
  filteredTasks = filteredTasks.sort((a, b) => {
    // Sort by due date first
    const dueDateA = new Date(a.dueDate).getTime();
    const dueDateB = new Date(b.dueDate).getTime();

    if (dueDateA !== dueDateB) {
      return dueDateA - dueDateB;
    }

    // If due dates are equal, sort by priority
    return a.priority.localeCompare(b.priority);
  });

  return (
    <div>
      {/* Search, Priority, and Task State Filter UI */}
      <div className="mb-4">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search tasks"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border rounded mr-2"
        />

        {/* Priority Filter Dropdown */}
        <select
          value={selectedPriority}
          onChange={(e) => setSelectedPriority(e.target.value)}
          className="p-2 border rounded mr-2"
        >
          <option value="">Priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        {/* Task State Filter Dropdown */}
        <select
          value={selectedTaskState}
          onChange={(e) => setSelectedTaskState(e.target.value)}
          className="p-2 border rounded"
        >
          <option value=""> Status</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      {/* Displaying sorted and filtered tasks in an unordered list */}
      <ul>
        {filteredTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

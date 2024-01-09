import * as actionTypes from '../constants/actionTypes';

export const addTask = (task) => ({
  type: actionTypes.ADD_TASK,
  payload: task,
});

export const editTask = (taskId, updatedTask) => ({
  type: actionTypes.EDIT_TASK,
  payload: { taskId, updatedTask },
});

export const deleteTask = (taskId) => ({
  type: actionTypes.DELETE_TASK,
  payload: taskId,
});

export const completeTask = (taskId) => ({
  type: actionTypes.COMPLETE_TASK,
  payload: taskId,
});

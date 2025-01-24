// Define action types
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';

// Action creators
export const login = (user) => ({
  type: LOGIN,
  payload: user,
});

export const logout = () => ({
  type: LOGOUT,
});

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const removeTask = (taskId) => ({
  type: REMOVE_TASK,
  payload: taskId,
});


  
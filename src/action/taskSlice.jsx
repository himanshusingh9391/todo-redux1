import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push({ id: Date.now(), text: action.payload });
    },
    deleteTask: (state, action) => {
      return state.filter(task => task.id !== action.payload);
    },
    updateTask: (state, action) => {
      const { id, text } = action.payload;
      const task = state.find(task => task.id === id);
      if (task) {
        task.text = text;
      }
    },
  },
});

export const { addTask, deleteTask, updateTask } = tasksSlice.actions;
export default tasksSlice.reducer;

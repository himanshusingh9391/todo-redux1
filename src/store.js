import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './action/taskSlice.jsx';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

export default store;

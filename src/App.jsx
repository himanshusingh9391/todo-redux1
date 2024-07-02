import React, { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

const App = () => {
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleEdit = (task) => {
    setTaskToEdit(task);
  };

  const clearEdit = () => {
    setTaskToEdit(null);
  };

  return (
    <div className="container mx-auto p-4 bg-sky-800 min-h-screen">
      <h1 className="text-2xl mb-4 flex justify-center">TODO LIST</h1>
      <TaskInput taskToEdit={taskToEdit} clearEdit={clearEdit} />
      <TaskList onEdit={handleEdit} />
    </div>
  );
};

export default App;

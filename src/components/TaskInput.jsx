import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, updateTask } from "../action/taskSlice";

const TaskInput = ({ taskToEdit, clearEdit }) => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (taskToEdit) {
      setText(taskToEdit.text);
    }
  }, [taskToEdit]);

  const handleAddOrUpdateTask = () => {
    if (text.trim()) {
      if (taskToEdit) {
        dispatch(updateTask({ id: taskToEdit.id, text }));
        clearEdit();
      } else {
        dispatch(addTask(text));
      }
      setText("");
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-sm p-4 bg-gray-100 rounded-lg shadow-md">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full px-3 py-2 border rounded-l-md focus:outline-none bg-white"
        />
        <button
          onClick={handleAddOrUpdateTask}
          className="w-full mt-2 px-4 py-2 bg-blue-500 text-white rounded-r-md"
        >
          {taskToEdit ? "Edit" : "Add"}
        </button>
      </div>
    </div>
  );
};

export default TaskInput;

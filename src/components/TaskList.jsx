import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../action/taskSlice";

const TaskList = ({ onEdit }) => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center h-screen lg:h-auto lg:justify-center mt-10  lg:items-start">
      <ul className="w-full max-w-md">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center mb-2 p-2 border rounded text-white"
          >
            <span>{task.text}</span>
            <div>
              <button
                onClick={() => onEdit(task)}
                className="px-2 py-1 bg-yellow-500 text-white rounded mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => dispatch(deleteTask(task.id))}
                className="px-2 py-1 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

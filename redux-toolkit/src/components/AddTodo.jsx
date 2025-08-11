import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../reduxToolkit/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!input.trim()) return; // avoid adding empty todos
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div className="flex justify-center items-center  bg-gray-100">
      <form
        onSubmit={handleAddTodo}
        className="bg-white shadow-lg rounded-xl p-6 flex gap-3 w-full max-w-md"
        >
         
        <input
          type="text"
          name="text"
          placeholder="Enter a todo..."
          onChange={(e) => setInput(e.target.value)}
          value={input}
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200 cursor-pointer"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
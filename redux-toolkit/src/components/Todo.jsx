import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../reduxToolkit/todoSlice";

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };
  return (
    <div className="flex justify-center items-start py-10 bg-gray-50 min-h-screen">
      <div className="bg-white shadow-xl rounded-xl p-6 w-full max-w-md border border-gray-200">
        <h1 className="text-2xl font-bold text-blue-600 mb-5 text-center">
          My Todo List
        </h1>

        {todos.length === 0 ? (
          <p className="text-gray-500 text-center">No todos yet. Add one!</p>
        ) : (
          <ul className="space-y-3">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="flex justify-between items-center bg-gray-100 rounded-lg px-4 py-2 shadow-sm"
              >
                <span className="text-gray-700">{todo.text}</span>
                <button
                  onClick={() => handleRemove(todo.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition-colors duration-200"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
export default Todo;

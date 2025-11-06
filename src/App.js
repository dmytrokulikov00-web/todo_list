import { useState } from "react";
import { TodoList } from "./components/TodoList";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { filterTodos } from "./utils/filterTodos";

export default function App() {
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [filter, setFilter] = useState("all");
  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };
  const toggleTodo = (id) => {
    setTodos(
        todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
    );
  };
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const filteredTodos = filterTodos(todos, filter);

  return (
      <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded-2xl shadow">
        <h1 className="text-2xl font-bold mb-4 text-center">Todo List</h1>

        <form
            onSubmit={(e) => {
              e.preventDefault();
              const text = e.target.todo.value.trim();
              if (!text) return;
              addTodo(text);
              e.target.reset();
            }}
            className="flex gap-2 mb-4"
        >
          <input
              name="todo"
              placeholder="Введите задачу..."
              className="border p-2 rounded w-full"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Добавить
          </button>
        </form>
        <div className="flex justify-center gap-2 mb-4">
          {["all", "active", "completed"].map((f) => (
              <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-3 py-1 rounded ${
                      filter === f ? "bg-blue-500 text-white" : "bg-gray-200"
                  }`}
              >
                {f}
              </button>
          ))}
        </div>
        <TodoList
            todos={filteredTodos}
            onToggle={toggleTodo}
            onRemove={removeTodo}
        />
      </div>
  );
}

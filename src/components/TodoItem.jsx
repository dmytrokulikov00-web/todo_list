export function TodoItem({ todo, onToggle, onRemove }) {
    return (
        <li className="flex justify-between items-center border p-2 rounded">
            <label className="flex items-center gap-2">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onToggle(todo.id)}
                />
                <span
                    className={todo.completed ? "line-through text-gray-400" : ""}
                >
          {todo.text}
        </span>
            </label>
            <button
                onClick={() => onRemove(todo.id)}
                className="text-red-500 font-bold"
            >
                ×
            </button>
        </li>
    );
}

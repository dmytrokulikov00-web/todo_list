import { TodoItem } from "./TodoItem";

export function TodoList({ todos, onToggle, onRemove }) {
    if (todos.length === 0)
        return <p className="text-center text-gray-500">Нет задач</p>;

    return (
        <ul className="space-y-2">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onRemove={onRemove}
                />
            ))}
        </ul>
    );
}
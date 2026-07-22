import TodoItem from "./TodoItem";

function TodoList({ todos }) {
  return (
    <div className="mt-8 space-y-4">
      {todos.length === 0 ? (
        <p className="py-10 text-center text-gray-400">
          📋 등록된 Todo가 없습니다.
        </p>
      ) : (
        todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))
      )}
    </div>
  );
}

export default TodoList;
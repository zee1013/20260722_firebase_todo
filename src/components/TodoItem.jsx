function TodoItem({ todo, deleteTodo, startEdit }) {
  // 삭제 버튼

  return (
    <div className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      {/* 왼쪽 */}
      <div className="flex items-center gap-4">
        {/* 이모지 */}
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-3xl">
          {todo.emoji}
        </div>

        {/* 내용 */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{todo.text}</h3>

          <p className="mt-1 text-sm text-gray-500">
            📅 {todo.date || "날짜 없음"}
          </p>
        </div>
      </div>

      {/* 버튼 */}
      <div className="flex gap-2">
        <button
          onClick={() => startEdit(todo)}
          className="rounded-lg bg-amber-400 px-4 py-2 text-sm font-medium text-white transition hover:bg-amber-500"
        >
          ✏️ 수정
        </button>

        <button
          onClick={() => deleteTodo(todo.id)}
          className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600"
        >
          🗑 삭제
        </button>
      </div>
    </div>
  );
}

export default TodoItem;

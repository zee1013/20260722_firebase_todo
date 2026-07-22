import { useState } from "react";

function TodoForm({addTodo}) {
  const [emoji, setEmoji] = useState("😊");
  const [text, setText] = useState("");
  const [date, setDate] = useState("");

//   추가버튼 클릭시 
const submit = (e)=>{
    e.preventDefault()
    // 텍스트가 없으면 제출을 막음(입력 내용이 없으면 종료)
    if(!text) return
    addTodo({
        emoji,
        text,
        date,
    })
    setEmoji("😊")
    setText("")
    setDate("")
}
  return (
    <form onSubmit={submit} className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-5">✨ 새로운 할 일</h2>

      <div className="grid gap-4 md:grid-cols-4">
        {/* 이모지 선택 */}
        <select
          value={emoji}
          onChange={(e) => setEmoji(e.target.value)}
          className="h-12 rounded-xl border border-gray-300 bg-gray-50 px-3 text-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
        >
          <option>😊</option>
          <option>📖</option>
          <option>💻</option>
          <option>🎽</option>
          <option>🍔</option>
        </select>

        {/* 할 일 입력 */}
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="할 일을 입력하세요"
          className="md:col-span-2 h-12 rounded-xl border border-gray-300 bg-gray-50 px-4 placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
        />

        {/* 날짜 선택 */}
        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type="date"
          className="h-12 rounded-xl border border-gray-300 bg-gray-50 px-3 text-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
        />
      </div>

      {/* 버튼 */}
      <button
        type="submit"
        className="mt-5 w-full h-12 rounded-xl bg-indigo-500 text-white font-semibold hover:bg-indigo-600 active:scale-[0.98] transition-all duration-200 shadow-md shadow-indigo-200"
      >
        추가하기
      </button>
    </form>
  );
}

export default TodoForm;

import { useEffect, useState } from "react";
import Login from "./components/Login";
// 로그인 상태 확인하는 기능
import { onAuthStateChanged } from "firebase/auth";
// firebase에서 로그인과 데이터베이스 가져오기
import { auth, db } from "./firebase";
import TodoForm from "./components/Todoform";
import TodoList from "./components/TodoList";
// firestore에서 데이터 추가, 가져오기
import { addDoc, collection, getDocs } from "firebase/firestore";

function App() {
  // 로그인한 사람을 저장하는 변수
  const [user, setUser] = useState(null)
  // 할 일 목록을 저장하는 변수
  const [todos, setTodos] = useState([])
  // 로그인 상태 확인
  // useEffect(()=>{} , []) 문법 
  useEffect(()=>{
    // 로그인 하면 currentUser에 로그인한 사람이 들어옴
    // 로그아웃 하면 null이 들어옴
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
      setUser(currentUser)
    })
    // app이 종료될 때 정리하기
    return ()=> unsubscribe()
  } , [])
  // todo 추가하기
  const addTodo = async (todo)=>{
    // firestore의 todos 폴더에 새 데이터 저장
    await addDoc(collection(db, "todos"), todo)
    // 저장이 끝나면 다시 목록을 가져오기
    loadTodos()
  }
  // firebase에 있는 todo 가져오기
  const loadTodos = async ()=>{
    const querySnapshot = await getDocs(collection(db, "todos"))
    // 가져온 데이터를 보기 쉽게 배열로 만들기
    const todoList = querySnapshot.docs.map((doc)=>({
      id:doc.id, // firebase 가 만들어준 id
      ...doc.data(), // 저장된 내용 (실제 데이터)
    }))
    // 화면에 보여줄 todos에 저장
    setTodos(todoList)
  }
  // 프로그램이 처음 실행될 때 todo 가져오기
  useEffect(()=>{
    loadTodos()
  }, [])

  return( <>
  <div className="min-h-screen bg-slate-100 flex justify-center py-10">
    <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8">
      {/* 제목 */}
      <h1 className="text-3xl font-bold text-center mb-8">Firebase TodoList</h1>
      {/* 로그인 화면 */}
      <Login user={user} setUser={setUser}/>
      {/* 로그인한 사람만 아래 내용을 볼 수 있음 */}
      {user && (
        <>
        {/* 할 일 입력하는 곳 */}
        <TodoForm addTodo={addTodo}/>
        {/* 할 일 목록 보여주는 곳 */}
        <TodoList todos={todos}/>
        </>
      )}

    </div>
  </div>
  </>
)}

export default App;

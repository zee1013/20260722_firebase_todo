import { signInWithPopup, signOut } from "firebase/auth"
import { auth, provider } from "../firebase";

function Login({user, setUser}){
    // 구글 로그인
    const login = async ()=>{
        // 구글 로그인 창 열기
        const result = await signInWithPopup(auth, provider)
        // 로그인한 사용자의 정보를 user에 저장
        setUser(result.user)
    }
    // 로그아웃
    const logout = async ()=>{
        // firebase에서 로그아웃하기
        await signOut(auth)
        // user 비워서 로그인 상태 해제
        setUser(null)
    }
    return(
        <>
        <div className="text-center mb-8">
            {/* user가 있으면(로그인 했으면) */}
            {user ? (<>
            {/* 프로필 사진 */}
            <img src={user.photoURL} alt={user.displayName}  className="w-20 h-20 rounded-full mx-auto"/>
            {/* 사용자 이름 */}
            <h2 className="text-xl font-bold mt-3">{user.displayName}</h2>
            {/* 이메일 */}
            <p className="text-gray-500 mb-4">{user.email}</p>
            {/* 로그아웃 버튼 */}
            <button onClick={logout} className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600">로그아웃</button>
            </>) : (<>
            {/* user 없으면 (로그인 안 했으면) */}
            <button onClick={login} className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">Google 로그인</button>
            </>)}
        </div>
        </>
    )
}
export default Login
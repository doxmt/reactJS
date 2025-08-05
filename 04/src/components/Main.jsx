// JSX 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다 (조건문 반복문 X) 
// 2. 숫자, 문자열, 배열 값만 렌더링 된다. 
// 3. 모든 태그는 닫혀있어야 함
// 4. 최상위 태그는 반드시 하나.

import "./Main.css"

const Main = () =>{
  const user = {
    name: "송태하",
    isLogin: true,
  }

  return(
    <main>
      {user.isLogin ? <div className='logout'>로그아웃</div> : <div>로그인</div>}
    </main>
  );
};

export default Main;
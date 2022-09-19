import "./App.css";
import Yeonju from "../Components/Yeonju.js";
import { createContext } from "react";

const data = createContext();
// 1. createContext로 전역으로 관리할 데이터의 대장 만들기
// 2. 데이터를 사용할 컴포넌트를 1에서 만든 변수의 이름.provider로 감싸기
// 3. <변수의이름.provider value={전송할 데이터}><component></component></변수의이름.provider>로 데이터 넘겨주기
// 4. 전송할 데이터가2개 이상이라면 value={{데이터1,데이터2}} 객체로 내보낸다.
// 5. 1번에서 만든 데이터의 대장을 (export) 모듈로 내보낸다.

function App() {
  const hello = "안녕하세요";
  const bye = "잘가잘가";
  return (
    <div className="App">
      <data.Provider value={{ hello, bye }}>
        <Yeonju b={hello} c={bye}></Yeonju>
      </data.Provider>
    </div>
  );
}

export { App, data };

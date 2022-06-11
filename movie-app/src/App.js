import {useEffect, useState} from "react";

function App() {
  // state: 상태 값, 함수 = 초기값
  const [counter, setValue] = useState(0);
  const onClick = () => setValue ((prev) => prev + 1);
  console.log("i run all the time");

  // 한번만 실행
  useEffect(() => {
    console.log("Call The API...");
  }, []);

  return (
    <div>
      {/* 클래스명 뒤에 랜던번호 출력 (module로 생성하여 받을 시)*/}
      {/* <h1 className={styles.title}>Welcome back!</h1>
      <Button text={'Continue'}/> */}
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;

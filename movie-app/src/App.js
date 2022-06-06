import Button from './Button';
import styles from "./App.module.css";

function App() {
  return (
    <div>
      {/* 클래스명 뒤에 랜던번호 출력 (module로 생성하여 받을 시)*/}
      <h1 className={styles.title}>Welcome back!</h1>
      <Button text={'Continue'}/>
    </div>
  );
}

export default App;

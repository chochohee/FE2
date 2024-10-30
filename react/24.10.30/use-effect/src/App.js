import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const handleCountUp = (e) => {
    setCount(count + 1);
  };

  //count가 변했을때 동작할 행동을 useEffect를 이용해 구현
  useEffect(() => {
    if (count !== 0) {
      if (count % 2) {
        alert("홀수입니다");
      } else {
        alert("짝수입니다");
      }
    }
  }, [count]);

  return (
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>Up!</button>
    </>
  );
}

function Time(props) {
  const [today, setToday] = useState(new Date());
  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();
  
  console.log("렌더링..?");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const t = new Date();
      setToday(t);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [today]);

  return (
    <>
      <h1>
        시간 : {hour}시 {min}분 {sec}초
      </h1>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Counter />
      <Time />
    </div>
  );
}

export default App;

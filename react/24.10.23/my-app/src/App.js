function TestComponent() {}

function TextArea() {
  return (
    <div className="wrapper">
      <textarea readOnly maxLength={3} style={{ backgroundColor: "blue" }} />
    </div>
  );
}

function 함수() {
  return "함수!!!";
}

const 값 = true;

export function App() {
  const name = "licat";
  const myStyle = { backgroundColor: "yellow" };

  return (
    <div>
      {100 + 1}
      {"hello" + "world"}
      {[1, 2, 3].map((x) => x ** 2)}
      {[3, 4, 5]}
      {함수()}
      {name}
      {값 ? "one" : "two"}

      <TestComponent />
      {/**aslfjaljdfl */}
      {name}
      <input
        className="newClass"
        style={myStyle}
        type="text"
        maxLength="10"
        name="hello"
      />
      <input type="checkbox" isblue="true" className="inpCheck" />
      <img src="" alt="" />

      <div className="App">
        <h1>HELLO EST SOFT!!!</h1>
      </div>
      <div className="App">
        <h1>HELLO EST SOFT!!!</h1>
      </div>
      <div className="App">
        <h1>HELLO EST SOFT!!!</h1>
      </div>
    </div>
  );
}

export function App2() {
  const name = "라이캣!";
  const someStyle = { backgroundColor: "black", color: "white" };
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();

  const list = [
    { no: 1, area: "대전", visited: false },
    { no: 2, area: "부산", visited: true },
    { no: 3, area: "목포", visited: false },
    { no: 4, area: "제주도", visited: false },
  ];
  const listTrue = { backgroundColor: "blue", color: "white" };
  return (
    <>
      <div>
        <h2 style={someStyle}>안녕, {name} 1호</h2>
        <h2>안녕, 라이캣 2호!</h2>
        <div className="newClass" />
      </div>
      <div style={someStyle}>
        <h2 style={{ color: "red" }}>년 : {year}</h2>
        <h2>
          월/일 : {month}/{date}
        </h2>
        <h2>
          시간 : {hour}시 {min}분 {sec}초
        </h2>
      </div>
      <ul>
        {list.map((item) => (
          <li key={item.no} style={item.visited ? listTrue : {}}>
            {item.area}
          </li>
        ))}
      </ul>
    </>
  );
}

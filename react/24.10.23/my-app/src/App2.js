export default function App2() {
  const name = "라이캣!";
  const someStyle = { backgroundColor: "black", color: "white" };
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const hour = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();


  return (
    <>
      <div>
        <h2 style={someStyle}>안녕, {name} 1호</h2>
        <h2>안녕, 라이캣 2호!</h2>
        <div className="newClass" />
      </div>
      <dl style={someStyle}>
        <dt style={{ color: "red" }}>년 : </dt>
        <dd>
          <time dateTime={year}>{year}</time>
        </dd>
        <dt>월/일 :</dt>
        <dd>
          <time dateTime={month + '-' + date}>
            {month}/{date}
          </time>
        </dd>
        <dt>시간 :</dt>
        <dd>
          <time dateTime= {hour + ':' + min + ':' + sec}>
            {hour}시 {min}분 {sec}초
          </time>
        </dd>
      </dl>

    </>
  );
}

// 각 컴포넌트들을 가지고 옵니다!
import Resume from "./Components/Resume";
import ColorText from "./Components/ColorText";
import "./App4.css";

function App4() {
  return (
    <>
      <div className="resume">
        <Resume
          hello="안녕하세요"
          name="개리"
          hobby="게임"
          food="고기"
          color="blue"
        />
      </div>
      <div>
        <ColorText color="red" />
        <ColorText color="green" />
        <ColorText color="blue" />
      </div>
    </>
  );
}

export default App4;

import { useState } from "react";
import Homepage from "./Components/Homepage/Homepage";
import Login from "./Components/Login/Login";

function App() {
  const user = {
    idUser: "jaehyun@weniv.com",
    pwUser: 1234,
  };

  const [isLogin, setIsLogin] = useState(false);
  console.log(isLogin);

  return (
    <>
      {isLogin ? (
        <Homepage setLogin={setIsLogin} />
      ) : (
        <Login userInfo={user} setLogin={setIsLogin} />
      )}
    </>
  );
}

export default App;

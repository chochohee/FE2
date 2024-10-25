import React from "react";

export default function Homepage({ setLogin }) {
  return (
    <>
      <h1>홈화면입니다</h1>
      <button onClick={() => setLogin(false)}>로그아웃</button>
    </>
  );
}

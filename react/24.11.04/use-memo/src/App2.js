import React, { createContext, useContext } from "react";
import HelloLicatTwo from "./HelloLicatTwo";
import { UserInfo } from "./context";

const App = () => {
  return <HelloLicat />;
};

const HelloLicat = () => {
  const { name, id } = useContext(UserInfo);
  return (
    <>
      <h2>{id}</h2>
      <strong>{name}</strong>
      <HelloLicatTwo />
    </>
  );
};

export default App;

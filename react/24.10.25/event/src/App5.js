import { useState } from "react";
import AdminView from "./Components/authority/AdminView";
import GuestView from "./Components/authority/GuestView";
import UserView from "./Components/authority/UserView";

const ContentContainer = ({ listName }) => {
  switch (listName) {
    case "admin":
      return <AdminView />;
    case "guest":
      return <GuestView />;
    case "user":
      return <UserView />;
    default:
      return <h2>"권한이 없습니다."</h2>;
  }
};

function App5() {
  const [listName, setListName] = useState("");

  const clickedID = (e) => {
    setListName(e.target.id);
  };

  return (
    <>
      <nav>
        <ul>
          <li id="admin" onClick={clickedID}>
            admin
          </li>
          <li id="guest" onClick={clickedID}>
            guest
          </li>
          <li id="user" onClick={clickedID}>
            user
          </li>
        </ul>
      </nav>
      <ContentContainer listName={listName} />
    </>
  );
}

export default App5;

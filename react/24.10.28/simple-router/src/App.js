import { useState } from "react";
import SimpleRouter from "./SimpleRouter";

function App() {
  const [userRole, setUserRole] = useState("guest");
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    const roles = ["admin", "guest", "user"];
    const randomIndex = Math.floor(Math.random() * roles.length);
    setUserRole(roles[randomIndex]);
    setIsLoading(false);
  }, 1000);

  return <SimpleRouter userRole={userRole} isLoading={isLoading} />;
}
export default App;
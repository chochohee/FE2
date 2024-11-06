import Content from "./Components/Content";
import LangSelector from "./Components/LangSelector";
import { LanguageProvider } from "./Context/LanguageProvider";

function App() {
  return (
    <LanguageProvider>
      <LangSelector />
      <Content />
    </LanguageProvider>
  );
}
export default App;

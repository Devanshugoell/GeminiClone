import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/main";
import ContextProvider from "./context/context";

function App() {
  return (
    <ContextProvider>
      <Sidebar />
      <Main />
    </ContextProvider>
  );
}

export default App;

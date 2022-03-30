import "./App.css";
import TodoContextProvaider from "./contexts/TodoContextProvaider";
import MyRoutes from "./MyRoutes";

function App() {
  return (
    <TodoContextProvaider>
      <MyRoutes />
    </TodoContextProvaider>
  );
}

export default App;

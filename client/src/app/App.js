import Todos from "../components/Todos";

import "./App.css";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "2rem",
      }}
    >
      <Todos />
    </div>
  );
}

export default App;

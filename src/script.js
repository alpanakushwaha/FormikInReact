import React from "react";
import ReactDOM from "react-dom/client";
import YoutubeForm from "./components/YoutubeForm";
// import "./style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  return (
    <>
      <div className="App">
        <YoutubeForm />
        {/* <h1>App Component</h1> */}
      </div>
    </>
  );
}
// export default App;
root.render(<App />);

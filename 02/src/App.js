import logo from "./logo.svg";
import "./App.css";

import { Element1, Element2 } from "./01JSX/JSX_Basic";
import { Element3 } from "./01JSX/JSX_Basic";
import { Element4 } from "./01JSX/JSX_Basic";

function App() {
  const headerTitle = "HEADER TITLE";
  const mainContents = "MAIN CONTENTS";
  return (
    <div className="App">
      <div
        className="header"
        style={{ fontSize: "30px", backgroundColor: "#baebfc", color: "white" }}
      >
        {headerTitle}
        <div style={{ backgroundColor: "#e4fbd4" }}>
          <Element1 />
        </div>
        <div style={{ backgroundColor: "#fbd5d5" }}>
          <Element2 />
        </div>
      </div>
      <div className="main"> {mainContents} </div>
      <div className="footer" style={{ color: "#c8c3f8" }}>
        <Element3 auth={"ROLE_ADMIN"} name={"dong"} />
        <hr />
        <Element4 auth={"ROLE_USER"} name={"DONG"} />
      </div>
    </div>
  );
}

export default App;

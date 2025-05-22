import logo from "./logo.svg";
import "./App.css";

import { Element1, Element2 } from "./01JSX/JSX_Basic";
import { Element3, Element4 } from "./01JSX/JSX_Basic";
import { Element5 } from "./01JSX/JSX_Basic";
import CustomComponent from "./01JSX/CustomComponent";

import ALL from "./01JSX/JSX_Basic";

// 이벤트 확인
import { Component_01, Component_02, Component_03 } from "./01JSX/JSX_Event";

function App() {
  const headerTitle = "HEADER TITLE";
  const mainContents = "MAIN CONTENTS";
  return (
    <div className="App">
      <div
        className="header"
        style={{ fontSize: "30px", backgroundColor: "#baebfc", color: "white" }}
      >
        {/* {headerTitle}
        <Element1 />
        <Element2 /> */}
      </div>
      <div className="main"> {mainContents} </div>
      <div className="footer" style={{ color: "#c8c3f8" }}>
        {/* <Element3 auth={"ROLE_ADMIN"} name={"dong"} />
        <hr />
        <Element4 auth={"ROLE_USER"} name={"DONG"} />
        <hr />
        <Element5 list={["aaa", "vvv", "ddd"]} />
        <hr />
        <DEFAULT.DefaultComponent1 />
        <DEFAULT.DefaultComponent2 />
        <hr />
        <CustomComponent /> */}

        <Component_01 />
        <Component_02 />
        <Component_03 />
      </div>
    </div>
  );
}

export default App;

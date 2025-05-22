import { useState, useEffect } from "react";

const MyComponent = () => {
  //   let count = 0;
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
    // console.log("Button CLICKED", Count);
  };
  // 최초 1회 실행
  useEffect(() => {
    console.log("init setting");
  }, []);
  // count state가 변경될때마다 실행
  useEffect(() => {
    console.log("count state changed", count);
  }, [count]);
  return (
    <div>
      <h1>TITLE</h1>
      <h2>SUB_TITLE</h2>
      <hr />
      <button onClick={handleClick}>BUTTON COUNT : {count}</button>
    </div>
  );
};
export default MyComponent;

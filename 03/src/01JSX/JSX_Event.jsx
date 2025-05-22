import { click } from "@testing-library/user-event/dist/click";

// 01
function handleClick_01() {
  console.log("clicked_01");
}
export function Component_01() {
  return (
    <div>
      <h1>HOLA - 1</h1>
      <button onClick={handleClick_01}>CLICK HERE</button>
    </div>
  );
}

// 02
export function Component_02() {
  function handleClick_02() {
    console.log("clicked_02");
  }
  return (
    <div>
      <h1>HOLA - 2</h1>
      <button onClick={handleClick_02}>HERE!!!</button>
    </div>
  );
}

export function Component_03() {
  function handleClick_03(event) {
    console.log("keydown", event.target.value);
  }
  return (
    <div>
      <h1>HOLA - 3</h1>
      <input type="text" onKeyDown={handleClick_03} />
    </div>
  );
}

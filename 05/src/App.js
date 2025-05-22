import Basic01 from "./Condition/01Basic";

function App() {
  return (
    <div className="App">
      <Basic01.Component01 isAuth={false} />
      <hr/>
      <Basic01.Component02 isAuth={true} />
      <hr/>
      <Basic01.Component03 items={['d','d','f','e']} />
      
    </div>
  );
}

export default App;

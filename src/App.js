
function MyComponent1() {
  return (
      <>
        <p>lorem ipsum dolor</p>
        <ul>
          <li>lorem.</li>
          <li>labore.</li>
          <li>Quas.</li>
        </ul>
      </>
  );
}
function Mycomponent2() {
  return (
      <div>
        <h1>Hello React</h1>
      </div>
  )
}

function App() {
  return (
    <div>
      <MyComponent1/>
      {/*<div>
        <h1>Hello Component</h1>
      </div>
      */}

      <Mycomponent2/>
      {/*
      <p>lorem</p>
      <ul>
        <li>lorem</li>
        <li>Component</li>
        <li>lorem Component</li>
      </ul>
      */}
    </div>
  );
}

export default App;

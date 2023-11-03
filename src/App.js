// import "bootstrap/dist/css/bootstrap.min.css";

function MyComp({ text, address, children }) {
  return (
    <div>
      <p>{text}</p>
      <p>{address}</p>
      <p>{children}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <MyComp text={"hello"} address={"seoul"}></MyComp>
    </div>
  );
}

export default App;

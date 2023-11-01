import { country, MyContent, MyElem, MyNavbar, text, value } from "./MyElem";

function App() {
  return (
    <div>
      <p>{country}</p>
      <p>{text}</p>
      <p>{value}</p>
      <MyElem />
      <MyNavbar />
      <MyContent />
    </div>
  );
}

export default App;

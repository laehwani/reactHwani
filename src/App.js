import "bootstrap/dist/css/bootstrap.css";
import age, { age, city, MyElem } from "./Comp/MyElem";
import MyContainer, { person, country } from "./Comp/MyBox";

function App() {
  return (
    <div>
      <MyElem />
      <h1>{city}</h1>
      <h1>{age}</h1>
      <MyContainer />
      <h1>
        {person.age}, {person.name}
      </h1>
      <h1>{country}</h1>
    </div>
  );
}

export default App;

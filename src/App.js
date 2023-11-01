import { getKeyEventProps } from "@testing-library/user-event/dist/keyboard/getEventProps";

function MyText(props) {
  props.style.textAlign = "center";
  return (
    <div style={props.style}>
      <p>{props.value}</p>
      <h1>{props.text}</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <MyText
        style={{
          color: "orange",
          backgroundColor: "skyblue",
          border: "5px dotted yellow",
        }}
        value={"바탕이에오"}
        text={"바탕화면인것이에오"}
      />
      <MyText
        style={{
          color: "skyblue",
          backgroundColor: "red",
          border: "5px dotted yellow",
        }}
        value={"본문이에오"}
        text={"본문인것이에오"}
      />
    </div>
  );
}

export default App;

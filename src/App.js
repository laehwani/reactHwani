import * as PropTypes from "prop-types";

function MyElem({ text, style }) {
  style.textAlign = "center";
  return (
    <div style={style}>
      <p>{text}</p>
    </div>
  );
}

function App() {
  return (
    <div
      style={{
        padding: "10px",
        margin: "auto",
        borderRadius: "10px",
        border: "1px solid black",
        backgroundColor: "coral",
      }}
    >
      <MyElem
        style={{ color: "skyblue", backgroundColor: "brown" }}
        text="오늘 점심 뭐먹지?"
      />
      <MyElem
        style={{ color: "yellow", backgroundColor: "green" }}
        text="비가 오니 삭신이 쑤셔"
      />
    </div>
  );
}

export default App;

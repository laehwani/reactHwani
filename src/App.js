import * as PropTypes from "prop-types";

function MyComp(
  m = "5px",
  p = "7px",
  color = "blue",
  bg = "white",
  text = "no content",
) {
  return (
    <div
      style={{
        margin: m,
        padding: p,
        color: color,
        backgroundColor: bg,
      }}
    >
      <p>{text}</p>
    </div>
  );
}

MyComp.propTypes = {
  p: PropTypes.string,
  color: PropTypes.string,
  bg: PropTypes.string,
  text: PropTypes.string,
  m: PropTypes.string,
};

function App() {
  return (
    <div>
      <MyComp
        m={"30px"}
        p={"10px"}
        color={"coral"}
        bg={"black"}
        text={"hello React!!"}
      />
      <MyComp
        m={"30px"}
        p={"10px"}
        color={"skyblue"}
        bg={"black"}
        text={"hello React!!"}
      />
      <MyComp
        m={"30px"}
        p={"10px"}
        color={"red"}
        bg={"black"}
        text={"hello React!!"}
      />
      <MyComp
        m={"30px"}
        p={"10px"}
        color={"white"}
        bg={"black"}
        text={"hello React!!"}
      />
    </div>
  );
}

export default App;

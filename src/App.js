import Box, { color } from "./Comp/Box";
import Container, { color as containerColor } from "./Comp/Container";

function App() {
  return (
    <div>
      <Box style={{ color: color }} />
      <Container style={{ color: containerColor }} />
    </div>
  );
}

export default App;

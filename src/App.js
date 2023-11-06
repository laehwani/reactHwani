import React, { useState } from "react";
import { Box, Button, Input, ListItem, UnorderedList } from "@chakra-ui/react";

function App(props) {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  function 버튼클릭() {
    setItems([...items, text]);
  }
  function 제거버튼(index) {
    // const nextItems = [...items];
    // nextItems.splice(index, 1);
    // setItems(nextItems);
    setItems(items.filter((item, i) => i != index));
  }

  return (
    <div>
      <Box>
        <Input value={text} onChange={(e) => setText(e.target.value)}></Input>
        <Button onClick={버튼클릭}>추가버튼</Button>
      </Box>
      <Box>
        <UnorderedList>
          {items.map((item, i) => (
            <ListItem key={i}>
              {item}
              <Button onClick={() => 제거버튼(i)}>제거</Button>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </div>
  );
}

export default App;

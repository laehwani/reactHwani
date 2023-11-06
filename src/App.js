import React, { useState } from "react";
import { Box, Button, List, ListItem, OrderedList } from "@chakra-ui/react";

function App(props) {
  const [items, setItems] = useState([]);

  function 버튼클릭(item) {
    // const newItems = [...items, item];
    // setItems(newItems);
    setItems([...items, item]);
    console.log(item);
  }

  return (
    <div>
      <Button onClick={() => 버튼클릭("커피")}>커피</Button>
      <Button onClick={() => 버튼클릭("케익")}>케익</Button>
      <Button onClick={() => 버튼클릭("아이스크림")}>아이스크림</Button>
      <Button onClick={() => 버튼클릭("위스키")}>위스키</Button>
      <Button onClick={() => 버튼클릭("보드카")}>보드카</Button>
      <Box>
        <OrderedList>
          {items.map((item, i) => (
            <ListItem key={i}>{item}</ListItem>
          ))}
        </OrderedList>
      </Box>
    </div>
  );
}

export default App;

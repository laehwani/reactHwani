import React from "react";
import { useImmer } from "use-immer";
import { Box, Button, ListItem, UnorderedList } from "@chakra-ui/react";

let nextId = 1;
function App(props) {
  const [items, updateItems] = useImmer([]);

  function handleBtnClick(todo) {
    updateItems((draft) => {
      draft.push({ id: nextId++, done: false, text: todo });
    });
  }

  function handleDoneBtn(id) {
    updateItems((draft) => {
      const item = draft.find((item) => item.id == id);
      if (item) {
        item.done = true;
      }
    });
  }

  return (
    <div>
      <Button onClick={() => handleBtnClick("자바공부")}>자바공부</Button>
      <Button onClick={() => handleBtnClick("점심먹기")}>점심먹기</Button>
      <Button onClick={() => handleBtnClick("잠자기")}>잠자기</Button>

      <Box>
        <UnorderedList>
          {items.map((item) => (
            <ListItem
              key={item.id}
              textDecoration={item.done ? "line-through" : "none"}
            >
              {item.text}
              <Button onClick={() => handleDoneBtn(item.id)}>완료</Button>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </div>
  );
}

export default App;

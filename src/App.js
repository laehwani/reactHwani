import React from "react";
import { Button, List, ListItem } from "@chakra-ui/react";

function App() {
  const arr = ["pizza", "돈까스", "햄버거", "김치찌개"];
  const arr2 = ["손흥민", "이강인", "김민재"];
  const arr3 = ["피자", "햄벅", "핫바"];

  const listItems = arr.map((item, index) => (
    <ListItem key={index}>{item}</ListItem>
  ));
  // const listNames = arr2.map((name) => <ListItem>{name}</ListItem>);
  // const listFood = arr3.map((food) => <ListItem>{food}</ListItem>);

  return (
    <div>
      <List>
        <ListItem>{listItems}</ListItem>
      </List>
      <List>
        {/*<ListItem>{listNames}</ListItem>*/}
        {arr2.map((e, i) => (
          <ListItem key={i}>{e}</ListItem>
        ))}
      </List>
      <List>
        {arr3.map((e, i) => (
          <ListItem key={i}>{e}</ListItem>
        ))}
      </List>
      <Button>리스트변경</Button>
    </div>
  );
}

export default App;

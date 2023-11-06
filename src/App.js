import React, { useState } from "react";
import { Button, Input, List, ListItem } from "@chakra-ui/react";

function App(props) {
  const [coffees, setCoffees] = useState(["라떼"]);
  const [text, setText] = useState("");

  function 버튼클릭() {
    const newCoffees = [...coffees];
    newCoffees.push(text);
    setCoffees(newCoffees);
    console.log(coffees);
    console.log(newCoffees);
  }

  return (
    <div>
      <Input value={text} onChange={(e) => setText(e.target.value)}></Input>
      <Button onClick={버튼클릭}>추가버튼</Button>

      <List>
        {coffees.map((c, i) => (
          <ListItem key={i}>{c}</ListItem>
        ))}
      </List>
    </div>
  );
}

export default App;

import React, { useState } from "react";

function App(props) {
  const [person, setPerson] = useState({ name: "son", city: "seoul" });
  return (
    <div>
      <Input value={person.name} onChange={handlenamechange}></Input>
      <Input value={person.name} onChange={handlenamechange}></Input>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";

function App(props) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function handleNameInput(e) {
    setName(e.target.value);
  }
  function handlePasswordInput(e) {
    setPassword(e.target.value);
  }
  function handleEmailInput(e) {
    setEmail(e.target.value);
  }
  function handleSubmit(e) {
    setSubmitting(e.target.value);
    // axios
    //   .post("/adduser", {
    //     name,
    //     email,
    //     password,
    //   })
    //   .then((response) => console.log("성공할때 해야하는일"))
    //   .catch((error) => console.log("실패"))
    //   .finally(() => console.log("꼭 해야하는일"));
  }
  return (
    <Center>
      <Box w={"480px"}>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input type="text" value={name} onChange={handleNameInput}></Input>
          <FormHelperText>띄어쓰기 없이 입력해주세요.</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>password</FormLabel>
          <Input
            type="password"
            value={password}
            onChage={handlePasswordInput}
          ></Input>
          <FormHelperText>
            특수기호와 숫자를 하나 이상 입력해주세요.
          </FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>UserEmail</FormLabel>
          <Input type="email" value={email} onChage={handleEmailInput}></Input>
          <FormHelperText>이메일은 중복될 수 없습니다..</FormHelperText>
        </FormControl>
        <Button onChange={handleSubmit} colorScheme="whatsapp">
          확인
        </Button>
      </Box>
    </Center>
  );
}

export default App;

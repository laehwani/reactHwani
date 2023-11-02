import {
  Box,
  Center,
  FormControl,
  FormLabel,
  Switch,
  Textarea,
} from "@chakra-ui/react";

function App() {
  return (
    <div>
      <Center>
        <Box w={"480px"}>
          <FormControl display={"flex"} alignItems={"center"}>
            <FormLabel mb={0}>알림을 받으시겠습니까?</FormLabel>
            <Switch></Switch>
          </FormControl>
        </Box>
      </Center>
    </div>
  );
}

export default App;

import {
  Box,
  Center,
  FormControl,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";

function App() {
  return (
    <div>
      <Center>
        <Box w={"480px"}>
          <FormControl>
            <FormLabel>본 문</FormLabel>
            <Textarea placeholder="본문을 작성하세요" h={"500px"}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus aliquid aut consequatur consequuntur cumque dolores,
              doloribus explicabo facilis hic magnam nemo optio quos recusandae
              rem rerum, ut voluptatibus! Eligendi, similique.
            </Textarea>
          </FormControl>
        </Box>
      </Center>
    </div>
  );
}

export default App;

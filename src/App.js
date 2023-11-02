import { Box, FormControl, Select } from "@chakra-ui/react";

function App() {
  return (
    <div>
      <Box w={"480px"}>
        <FormControl>
          <Select placeholder="선택하세요">
            {/*option[value=value$]*5>lorem1*/}
            <option value="value1">Lorem.</option>
            <option value="value2">Aliquid?</option>
            <option value="value3">Fuga.</option>
            <option value="value4">Facere.</option>
            <option value="value5">Alias.</option>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

export default App;

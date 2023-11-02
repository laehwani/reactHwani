import {
  Box,
  SimpleGrid,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

function App() {
  return (
    <div>
      <SimpleGrid columns={1} gap={5}>
        <Box>
          {/*Table>Thead>Tr>Th*4>lorem1^^Tbody>Td*4>lorem1*/}
          <Table variant={"striped"} colorSchema={"red"} size={"sm"}>
            <Thead>
              <Tr>
                <Th>Lorem ipsum.</Th>
                <Th>Explicabo, nam.</Th>
                <Th>Eaque, reprehenderit.</Th>
                <Th>Fuga, omnis.</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Lorem ipsum.</Td>
                <Td>Adipisci, dolore.</Td>
                <Td>A, ut?</Td>
                <Td>Ipsa, vero.</Td>
              </Tr>
              <Tr>
                <Td>Lorem ipsum.</Td>
                <Td>Dicta, praesentium.</Td>
                <Td>Explicabo, recusandae.</Td>
                <Td>Expedita, illo!</Td>
              </Tr>
              <Tr>
                <Td>Lorem ipsum.</Td>
                <Td>Blanditiis, voluptatem.</Td>
                <Td>At, quam!</Td>
                <Td>Suscipit, ut?</Td>
              </Tr>
              <Tr>
                <Td>Lorem ipsum.</Td>
                <Td>Illum, sit!</Td>
                <Td>Beatae, cupiditate.</Td>
                <Td>Quos, reiciendis!</Td>
              </Tr>
              <Tr>
                <Td>Lorem ipsum.</Td>
                <Td>Eius, neque.</Td>
                <Td>Veritatis, voluptatum?</Td>
                <Td>Est, minus!</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </SimpleGrid>
    </div>
  );
}

export default App;

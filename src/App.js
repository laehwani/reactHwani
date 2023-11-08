import React, { useEffect, useState } from "react";
import axios from "axios";
import data from "bootstrap/js/src/dom/data";
import { Box, Select, Spinner, Text } from "@chakra-ui/react";

function App(props) {
  const [employeeId, setEmployeeId] = useState(0);
  const [employee, setEmployee] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (employeeId != 0) {
      axios
        .get("/api/main1/sub5?id=" + employeeId)
        .then((r) => r.data)
        .then((data) => setEmployee(data))
        .catch((error) => setEmployee(null))
        .finally(() => setIsLoading(false));
    }
  }, [employeeId]);

  return (
    // 직원 번호를 선택하면 직원의 이름이 출력
    // /api/main1/sub5?id=5
    // 스프링부트의 메소드도 작성
    <div>
      <Select
        placeholder="직원 번호를 선택하세요"
        onChange={(e) => setEmployeeId(e.target.value)}
      >
        {/*option[value=$]{$}*10*/}
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </Select>
      <Box>
        {isLoading && <Spinner></Spinner>}
        {isLoading || (
          <div>
            {employee === null ? (
              <Text>조회한 직원이 없습니다.</Text>
            ) : (
              // ((<Text>직원 이름 : {LastName}</Text>),
              <Text>직원 이름 : {employee.firstName}</Text>
            )}
          </div>
        )}
      </Box>
    </div>
  );
}

export default App;

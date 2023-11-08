import React, { useEffect, useState } from "react";
import axios from "axios";
import data from "bootstrap/js/src/dom/data";
import { Box, Select, Spinner, Text } from "@chakra-ui/react";

function App(props) {
  const [employeeIdList, setEmployeeIdList] = useState([]);
  const [employeeId, setEmployeeId] = useState(0);
  const [employee, setEmployee] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios("/api/main/sub6)".then((r) => setEmployeeIdList(r.data)));
  }, []);

  useEffect(() => {
    if (setIsLoading(true)) {
      axios
        .get("/api/main1/sub5?id=" + employeeId)
        .then((r) => r.data)
        .then((data) => setEmployee(data))
        .catch((error) => setEmployee(null))
        .finally(() => setIsLoading(false));
    }
  }, [employeeId]);

  let textContent = null;
  if (isLoading) {
    textContent = <Spinner />;
  } else {
    if (employee === null) {
      textContent = <Text>다른 직원 번호를 선택해주세요.</Text>;
    } else {
      textContent = (
        <Text>
          <h4>직원 번호 : {employeeId}</h4>
          <p>
            직원 이름 : {employee.firstName}
            {employee.lastName}
          </p>
          <p>{employee.birthDate}</p>
          <p>{employee.notes}</p>
        </Text>
      );
    }
  }

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
        {/*<option value="1">1</option>*/}
        {/*<option value="2">2</option>*/}
        {/*<option value="3">3</option>*/}
        {/*<option value="4">4</option>*/}
        {/*<option value="5">5</option>*/}
        {/*<option value="6">6</option>*/}
        {/*<option value="7">7</option>*/}
        {/*<option value="8">8</option>*/}
        {/*<option value="9">9</option>*/}
        {/*<option value="10">10</option>*/}
        {employeeIdList.map((id) => (
          <option value={id}>{id}</option>
        ))}
      </Select>
      <Box>{textContent}</Box>
    </div>
  );
}

export default App;

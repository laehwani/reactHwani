import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { Box, Button, Flex, Link } from "@chakra-ui/react";

function HomeComponent() {
  // 경로 이동시 useNavigate hook 사용 해야함
  const navigate = useNavigate();
  return (
    <div>
      <Flex gap={"10px"}>
        <Box>
          {/*경로 이동시 js 코드를 그냥 쓰면 안된다!!*/}
          <Button onClick={() => (window.location.href = "/apath")}>
            A로 가기
          </Button>
        </Box>
        <Box>
          <Button onClick={() => (window.location.href = "/bpath")}>
            B로 가기
          </Button>
        </Box>

        <Box>
          <Button onClick={() => navigate("/apath")}>A 로 가기</Button>
        </Box>
        <Box>
          <Button onClick={() => navigate("/bpath")}>B 로 가기</Button>
        </Box>
      </Flex>
      <Outlet />
    </div>
  );
}

function Acomp() {
  return (
    <div>
      <Box>A 컴포넌트</Box>
    </div>
  );
}

function Bcomp() {
  return (
    <div>
      <Box>B 컴포넌트</Box>
    </div>
  );
}

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeComponent />}>
      <Route path="apath" element={<Acomp></Acomp>}></Route>
      <Route path="bpath" element={<Bcomp></Bcomp>}></Route>
    </Route>,
  ),
);
function App(props) {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;

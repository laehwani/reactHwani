import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Box, Flex, Link } from "@chakra-ui/react";

function HomeComponent() {
  return (
    <div>
      <Flex gap={"10px"}>
        <Box>
          <a href="/apath">에이경로로 가기</a>
        </Box>
        <Box>
          <a href="/bpath">비 경로로 가기</a>
        </Box>
        {/*react-router 사용시 a 태그를 사용하지 않을 것*/}

        {/*대신 Link Componenet 사용하는게 좋음*/}
        {/*왜냐하면 브라우저의 새로고침을 막기위해*/}
        <Box>
          <Link to={"/apath"}>에이로 가기</Link>
        </Box>
        <Box>
          <Link to={"/bpath"}>비로 가기</Link>
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

import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Box } from "@chakra-ui/react";

function HomeComponent() {
  return (
    <div>
      <Box>
        공통된요소들 <Outlet></Outlet>
      </Box>
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

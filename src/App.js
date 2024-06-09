import React from "react";
import Page from "./page/Page";
import Work1 from "./page/section/work/Work1";
import Work2 from "./page/section/work/Work2";
import Work3 from "./page/section/work/Work3";
import Work4 from "./page/section/work/Work4";
import Work5 from "./page/section/work/Work5";
import Work6 from "./page/section/work/Work6";
import Work7 from "./page/section/work/Work7";
import Create from "./page/Create";
import UseEffect from "./page/UseEffect";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import theme from "./scss/theme";

import "./App.css";
import "../src/scss/reset.scss";

import styled from "styled-components";
import Footer from "./page/Footer";
const Back = styled.main`
  width: 100%;

  margin: 0 auto;
`;

function App() {
  return (
    <>
      <Back>
        <Router>
          <Routes>
            <Route path="/" element={<Page />} />
            {/* {/* <Route path="/UseEffect" element={<UseEffect />} /> */}
            <Route path="/work1" element={<Work1 />} />
            <Route path="/work2" element={<Work2 />} />
            <Route path="/work3" element={<Work3 />} />
            <Route path="/work4" element={<Work4 />} />
            <Route path="/work5" element={<Work5 />} />
            <Route path="/work6" element={<Work6 />} />
            <Route path="/work7" element={<Work7 />} />
          </Routes>
        </Router>
        <Footer />
      </Back>
    </>
  );
}

export default App;

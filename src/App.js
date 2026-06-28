import React from "react";
import Page from "./page/Page";
import Work1 from "./page/section/work/Work1";
import Work2 from "./page/section/work/Work2";
import Work3 from "./page/section/work/Work3";
import Work4 from "./page/section/work/Work4";
import Work4_1 from "./page/section/work/Work4_1";
import Work5 from "./page/section/work/Work5";
import Work6 from "./page/section/work/Work6";
import Work7 from "./page/section/work/Work7";
import Work8 from "./page/section/work/Work8";
import Work9 from "./page/section/work/Work9";
import Work10 from "./page/section/work/Work10";

import ScrollToTop from "./component/ScrollToTop";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {ThemeProvider} from "styled-components";

import "./App.css";
import "../src/scss/reset.scss";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Page />} />

          <Route path="/work1" element={<Work1 />} />
          <Route path="/work2" element={<Work2 />} />
          <Route path="/work3" element={<Work3 />} />
          <Route path="/work4" element={<Work4 />} />
          <Route path="/work4_1" element={<Work4_1 />} />
          <Route path="/work5" element={<Work5 />} />
          <Route path="/work6" element={<Work6 />} />
          <Route path="/work7" element={<Work7 />} />
          <Route path="/work8" element={<Work8 />} />
          <Route path="/work9" element={<Work9 />} />
          <Route path="/work10" element={<Work10 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

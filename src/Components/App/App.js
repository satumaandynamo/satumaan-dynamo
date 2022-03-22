import React, { Component, Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import i18n from "./i18n";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Navigation from "./Navigation";
import Loading from "./Loading";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation>
            <Route path="/" element={Home} exact />
            <Route path="/about" element={About} />
            <Route path="/contact" element={Contact} />
            <Route element={Error} />
          </Navigation>
          <Suspense fallback={<Loading />}></Suspense>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

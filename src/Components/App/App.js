import React, { useState, Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import Navbar from "./Navigation";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Loading from "./Loading";
import Header from "./Header";

function App() {
  let languageStoredInLocalStorage = localStorage.getItem("language");
  let [language, setLanguage] = useState(
    languageStoredInLocalStorage ? languageStoredInLocalStorage : "English"
  );

  return (
    <Router>
      <div>
        <Suspense fallback={<Loading />}>
          <Navbar
            language={language}
            handleSetLanguage={(language) => {
              setLanguage(language);
              storeLanguageInLocalStorage(language);
            }}
          >
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Navbar>
          <Container>
            <Header language={language}></Header>
          </Container>
        </Suspense>
      </div>
    </Router>
  );
}

function storeLanguageInLocalStorage(language) {
  localStorage.setItem("language", language);
}

export default App;

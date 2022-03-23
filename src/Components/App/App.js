import React, { useState, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Navbar
          language={language}
          handleSetLanguage={(language) => {
            setLanguage(language);
            storeLanguageInLocalStorage(language);
          }}
        >
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={About} />
            <Route path="/contact" element={<Contact language={language} />} />
          </Routes>
        </Navbar>
        <Container>{/* <Header language={language}></Header> */}</Container>
      </Suspense>
    </BrowserRouter>
  );
}

function storeLanguageInLocalStorage(language) {
  localStorage.setItem("language", language);
}

export default App;

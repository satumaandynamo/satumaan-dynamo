import React, { useState, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, About, Contact } from "./Components/Pages/Index.js";
import { Navbar, Loading, GlobalStyles } from "./Components/App/Index.js";

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
        />
        <GlobalStyles />
        <Routes>
          <Route exactly path="/" element={<Home />} />
          <Route exactly path="/about" element={<About />} />
          <Route
            exactly
            path="/contact"
            element={<Contact language={language} />}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

function storeLanguageInLocalStorage(language) {
  localStorage.setItem("language", language);
}

export default App;

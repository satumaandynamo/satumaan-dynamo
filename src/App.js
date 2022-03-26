import React, { useState, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Home,
  About,
  Contact,
  BikeKitchen,
  Events,
  JoinUs,
} from "./Components/Pages/Index.js";
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
          <Route exactly path="/" element={<Home language={language} />} />
          <Route
            exactly
            path="/about"
            element={<About language={language} />}
          />
          <Route
            exactly
            path="/contact"
            element={<Contact language={language} />}
          />
          <Route
            exactly
            path="/bikekitchen"
            element={<BikeKitchen language={language} />}
          />
          <Route
            exactly
            path="/events"
            element={<Events language={language} />}
          />
          <Route
            exactly
            path="/joinus"
            element={<JoinUs language={language} />}
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

import React, { useState } from "react";
import { Container } from "@material-ui/core";

function BikeKitchen(props) {
  let languageStoredInLocalStorage = localStorage.getItem("language");
  let [language, setLanguage] = useState(
    languageStoredInLocalStorage ? languageStoredInLocalStorage : "English"
  );

  let content = {
    English: {
      title: "Juu",
      description: "This is some random text here",
    },
    Suomi: {
      title: "Khyl",
      description: "Suomeksi hyvää tekstiä",
    },
  };

  props.language === "Suomi"
    ? (content = content.Suomi)
    : (content = content.English);

  return (
    <div>
      <h1>{content.title}</h1>
      <p>{content.description}</p>
    </div>
  );
}

function storeLanguageInLocalStorage(language) {
  localStorage.setItem("language", language);
}

export default BikeKitchen;

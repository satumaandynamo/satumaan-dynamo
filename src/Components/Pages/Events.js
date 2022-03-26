import React, { useState } from "react";
import { Container } from "@material-ui/core";

function Events(props) {
  let languageStoredInLocalStorage = localStorage.getItem("language");
  let [language, setLanguage] = useState(
    languageStoredInLocalStorage ? languageStoredInLocalStorage : "English"
  );

  let content = {
    English: {
      title: "Lorem",
      description: "This is some random text here",
    },
    Suomi: {
      title: "Suomeksi",
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

export default Events;

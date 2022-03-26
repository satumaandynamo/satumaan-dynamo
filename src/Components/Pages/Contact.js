import React, { useState } from "react";
import { Container } from "@material-ui/core";

function Contact(props) {
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
    <Container>
      <div>
        <h1>{content.title}</h1>
        <p>{content.description}</p>
      </div>
    </Container>
  );
}

function storeLanguageInLocalStorage(language) {
  localStorage.setItem("language", language);
}

export default Contact;

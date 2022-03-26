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
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod sapien id sagittis tristique. Proin vitae quam neque. Nunc tincidunt metus lectus, non euismod felis interdum sed. Duis sit amet neque quis ipsum laoreet commodo auctor ac ligula. In quis erat porta arcu rhoncus vehicula tristique vel ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla varius volutpat augue, vulputate pharetra ipsum iaculis id. In a felis sed tellus pulvinar tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod sapien id sagittis tristique. Proin vitae quam neque. Nunc tincidunt metus lectus, non euismod felis interdum sed. Duis sit amet neque quis ipsum laoreet commodo auctor ac ligula. In quis erat porta arcu rhoncus vehicula tristique vel ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla varius volutpat augue, vulputate pharetra ipsum iaculis id. In a felis sed tellus pulvinar tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod sapien id sagittis tristique. Proin vitae quam neque. Nunc tincidunt metus lectus, non euismod felis interdum sed. Duis sit amet neque quis ipsum laoreet commodo auctor ac ligula. In quis erat porta arcu rhoncus vehicula tristique vel ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla varius volutpat augue, vulputate pharetra ipsum iaculis id. In a felis sed tellus pulvinar tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod sapien id sagittis tristique. Proin vitae quam neque. Nunc tincidunt metus lectus, non euismod felis interdum sed. Duis sit amet neque quis ipsum laoreet commodo auctor ac ligula. In quis erat porta arcu rhoncus vehicula tristique vel ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla varius volutpat augue, vulputate pharetra ipsum iaculis id. In a felis sed tellus pulvinar tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod sapien id sagittis tristique. Proin vitae quam neque. Nunc tincidunt metus lectus, non euismod felis interdum sed. Duis sit amet neque quis ipsum laoreet commodo auctor ac ligula. In quis erat porta arcu rhoncus vehicula tristique vel ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla varius volutpat augue, vulputate pharetra ipsum iaculis id. In a felis sed tellus pulvinar tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod sapien id sagittis tristique. Proin vitae quam neque. Nunc tincidunt metus lectus, non euismod felis interdum sed. Duis sit amet neque quis ipsum laoreet commodo auctor ac ligula. In quis erat porta arcu rhoncus vehicula tristique vel ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla varius volutpat augue, vulputate pharetra ipsum iaculis id. In a felis sed tellus pulvinar tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod sapien id sagittis tristique. Proin vitae quam neque. Nunc tincidunt metus lectus, non euismod felis interdum sed. Duis sit amet neque quis ipsum laoreet commodo auctor ac ligula. In quis erat porta arcu rhoncus vehicula tristique vel ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla varius volutpat augue, vulputate pharetra ipsum iaculis id. In a felis sed tellus pulvinar tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod sapien id sagittis tristique. Proin vitae quam neque. Nunc tincidunt metus lectus, non euismod felis interdum sed. Duis sit amet neque quis ipsum laoreet commodo auctor ac ligula. In quis erat porta arcu rhoncus vehicula tristique vel ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla varius volutpat augue, vulputate pharetra ipsum iaculis id. In a felis sed tellus pulvinar tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod sapien id sagittis tristique. Proin vitae quam neque. Nunc tincidunt metus lectus, non euismod felis interdum sed. Duis sit amet neque quis ipsum laoreet commodo auctor ac ligula. In quis erat porta arcu rhoncus vehicula tristique vel ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla varius volutpat augue, vulputate pharetra ipsum iaculis id. In a felis sed tellus pulvinar tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod sapien id sagittis tristique. Proin vitae quam neque. Nunc tincidunt metus lectus, non euismod felis interdum sed. Duis sit amet neque quis ipsum laoreet commodo auctor ac ligula. In quis erat porta arcu rhoncus vehicula tristique vel ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla varius volutpat augue, vulputate pharetra ipsum iaculis id. In a felis sed tellus pulvinar tempor.",
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

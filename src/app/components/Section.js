// src/Section.js
import React from "react";

function Section({ title, content }) {
  return (
    <section>
      <h2>{title}</h2>
      <p>{content}</p>
    </section>
  );
}

export default Section;
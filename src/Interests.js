import React from "react";

export default function Languages() {
  return (
    <div className="languages">
      <h1>Interests</h1>
      <div className="job-row">
        <p className="lead">
          <span role="img" aria-label="book">
            📖
          </span>{" "}
          I love to read... my favorite book is "The fountainhead" by Ayn Rand
          and "Great expectations" by Charles Dickens.
        </p>
      </div>
      <div className="job-row">
        <p className="lead">
          <span role="img" aria-label="laptop">
            💻
          </span>{" "}
          I love everything related to machine learning.
        </p>
      </div>
    </div>
  );
}

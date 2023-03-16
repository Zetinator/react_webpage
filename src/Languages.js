import React from "react";

export default function Languages() {
  return (
    <div className="languages">
      <h1>Languages</h1>
      <div className="job-row">
        <p className="lead">
          <span role="img" aria-label="mexican flag">
            🇲🇽
          </span>{" "}
          SPANISH (MOTHER TONGUE)
        </p>
      </div>
      <div className="job-row">
        <p className="lead">
          <span role="img" aria-label="american flag">
            🇺🇲
          </span>{" "}
          ENGLISH (FLUENT C1)
        </p>
      </div>
      <div className="job-row">
        <p className="lead">
          <span role="img" aria-label="german flag">
            🇩🇪
          </span>{" "}
          GERMAN (FLUENT C1)
        </p>
      </div>
    </div>
  );
}

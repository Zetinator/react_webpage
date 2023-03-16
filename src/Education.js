import React from "react";

function Institution(props) {
  return (
    <div className="job-row">
      <div className="left">
        <h2 className="blue">
          <span role="img" aria-label="book">
            📖
          </span>{" "}
          {props.major}
        </h2>
        <h3>
          <a
            className="App-link"
            href={props.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.name}
          </a>
        </h3>
        <p className="job-description">{props.gpa}</p>
      </div>
      <div className="right">
        <p className="date">{props.date}</p>
      </div>
    </div>
  );
}

export default function Education() {
  // list of programming languajes
  const institutions = [
    {
      website: "https://www.itam.mx/en/1/pages/about-itam",
      name: "Instituto Tecnológico Autónomo de México",
      major: "BACHELOR MECHATRONICS ENGINEER",
      gpa: "GPA: 87/100",
      date: "August 2014 - December 2018",
    },
    {
      website: "https://www.thi.de/hochschule/ueber-uns/campus/",
      name: "Technische Hochschule Ingolstadt",
      major: "COMPUTER SCIENCE (International student)",
      gpa: "PA: 70/100",
      date: "October 2017 - October 2018",
    },
  ];
  // map renderers
  const institutionJSX = institutions.map((institute, index) => {
    return (
      <Institution
        website={institute.website}
        name={institute.name}
        major={institute.major}
        gpa={institute.gpa}
        date={institute.date}
        key={index}
      />
    );
  });
  return (
    <div className="education pulsing-link">
      <h1>Education</h1>
      {institutionJSX}
    </div>
  );
}

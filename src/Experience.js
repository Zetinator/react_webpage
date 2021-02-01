import React from "react";

function Job(props) {
  return (
    <div className="job-row pulsing-link">
      <div className="left">
        <h2 className="blue">{props.position}</h2>
        <h3>
          <a
            className="App-link"
            href={props.website}
            target="_blank"
            rel="noopener noreferrer"
          >
          {props.company}
            </a>
        </h3>
        <p className="job-description">
          {props.description_first}
          <br />
          {props.description_second}
        </p>
      </div>
      <div className="right">
        <p className="date">{props.date}</p>
      </div>
    </div>
  );
}

export default function Experience() {
  const jobs = [
    {
      position: "Software Engineer",
      company: "Google",
      website: "https://www.google.com",
      description_first:
        "Geo Enterprise (data quality team), improving the quality of responses for a variety of queries from Google Maps",
      description_second:
        "",
      date: "January 2021 - Now",
    },
    {
      position: "Data Scientist",
      company: "LISA Insurtech",
      website: "https://www.lisainsurtech.com/en/home-page/",
      description_first:
        "Created a REST API for named entity recognition that reads legal documents, and extracts useful information from them, using machine learning and NLP.",
      description_second:
        "Implemented an elastic search server to facilitate search and retrieval of thousands of documents.",
      date: "February 2020 - January 2021",
    },
    {
      position: "Software Development, Intern",
      company: "Audi AG",
      website: "https://www.audi.de/de/brand/de.html",
      description_first:
        "Training of a neural network (GAN) for the photo-realistic generation of images based on simulated data using tensorflow, that will be used to generate realistic scenarios to train autonomous agents using simulations.",
      description_second:
        "Implementation of a tool for the quality assurance of descriptors of road networks (C++ and Python) as well as code improvements and bug fixes for various projects.",
      date: "June 2019 - December 2019 and February 2018 - August 2018",
    },
  ];
  const jobsJSX = jobs.map((job, index) => {
    return (
      <Job
        position={job.position}
        company={job.company}
        website={job.website}
        description_first={job.description_first}
        description_second={job.description_second}
        date={job.date}
        key={index}
      />
    );
  });

  return (
    <div className="experience">
      <h1>Experience</h1>
      {jobsJSX}
    </div>
  );
}

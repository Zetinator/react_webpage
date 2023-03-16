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
        "Developed and implemented data processing pipelines for Geo Enterprise to analyze and optimize response quality for various Google Maps APIs, ultimately improving user experience.",
      description_second:
        "Designed and developed a highly scalable pseudonymization service for data pipelines, enabling the storage and analysis of sensitive data for seasonality analysis.",
      date: "January 2021 - Now",
    },
    {
      position: "Data Scientist",
      company: "LISA Insurtech",
      website: "https://www.lisainsurtech.com/en/home-page/",
      description_first:
        "Created a REST API that reads legal documents using natural language processing to extract useful information from thousands of documents to automate insurance claiming processes.",
      description_second:
        "Implemented an elastic search server to facilitate search and retrieval of thousands of documents.",
      date: "February 2020 - January 2021",
    },
    {
      position: "Software Development, Intern",
      company: "Audi AG",
      website: "https://www.audi.de/de/brand/de.html",
      description_first:
        "Trained a neural network (GAN) to generate photo-realistic images based on simulated data using tensorflow, it was used to train autonomous cars inside simulations.",
      description_second:
        "Improved a quality assurance tool for road networks by working on code improvements and bug fixes for various projects in C++ and Python.",
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

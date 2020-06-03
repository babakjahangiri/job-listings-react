import React from "react";
import "./JobList.scss";
import "./../JobCard";
import JobCard from "./../JobCard";
import JobData from "./../../data.json";

const JobList = () => {
  return (
    <div className="joblist-container">
      {JobData.map((jobinfo, index) => (
        <JobCard jobinfo={jobinfo} key={jobinfo.id} />
      ))}
    </div>
  );
};

export default JobList;

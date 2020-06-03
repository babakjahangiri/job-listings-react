import React from "react";
import "./JobList.scss";
import "./../JobCard";
import JobCard from "./../JobCard";

const JobList = () => {
  return (
    <div class="joblist-container">
      <JobCard />
    </div>
  );
};

export default JobList;

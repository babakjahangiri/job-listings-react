import React, { useState } from "react";
import "./JobList.scss";
import "./../JobCard";
import JobCard from "./../JobCard";
import JobData from "./../../data.json";
import FilterBox from "../FilterBox";

const JobList = () => {
  const [filters, setFilters] = useState([]);

  function addToFilterBox(filterName) {
    !filters.includes(filterName) && setFilters([...filters, filterName]);
  }

  function removeFromFilterBox(filterName) {
    setFilters(filters.filter((filter) => filter !== filterName));
  }

  function clearFilterBox() {
    setFilters([]);
  }

  const filteredJobs = JobData.filter((job) => {
    const roleName =
      job.role.charAt(0).toUpperCase() + job.role.toLowerCase().slice(1);

    const filterableValues = [
      roleName,
      job.level,
      ...job.languages,
      ...job.tools,
    ];

    return filters.every((filter) => filterableValues.includes(filter));
  });

  return (
    <React.Fragment>
      <FilterBox
        tags={filters}
        handleTagsRemove={removeFromFilterBox}
        handleSetClear={clearFilterBox}
      />
      <div className="joblist-container">
        {filteredJobs.map((jobinfo, index) => (
          <JobCard
            key={jobinfo.id}
            jobinfo={jobinfo}
            tagHandleSelect={addToFilterBox}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default JobList;

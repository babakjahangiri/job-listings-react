import React from "react";
import LangSkills from "../../components/LangSkills";
import Role from "../../components/Role";
import Level from "../../components/Level";
import "./JobCard.scss";
import NotifyTags from "../NotifyTags";

const JobCard = ({ jobinfo }) => {
  return (
    <div className="jobcard-container">
      <div className="jobcardimage-container">
        <img src={jobinfo.logo} alt={jobinfo.company} />
      </div>
      <div className="joninfo-container">
        <h2>
          {jobinfo.company}{" "}
          <NotifyTags new={jobinfo.new} featured={jobinfo.featured} />
        </h2>

        <h1>{jobinfo.position}</h1>
        <h4>
          <span>{jobinfo.postedAt}</span>
          <span className="bd">.</span>
          <span>{jobinfo.contract}</span>
          <span className="bd">.</span>
          <span>{jobinfo.location}</span>
        </h4>
      </div>
      <div className="tags-container">
        <Role roles={jobinfo.role} />
        <Level levels={jobinfo.level} />
        <LangSkills langs={jobinfo.languages} />
      </div>
    </div>
  );
};

export default JobCard;

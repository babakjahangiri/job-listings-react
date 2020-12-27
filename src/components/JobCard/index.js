import React from "react";
import LangSkills from "../../components/LangSkills";
import Role from "../../components/Role";
import Level from "../../components/Level";
import Tools from "../../components/Tools";
import "./JobCard.scss";
import NotifyTags from "../NotifyTags";

const JobCard = ({ jobinfo, tagHandleSelect }) => {
  //console.log(tagHandleSelect);
  //console.log();
  //console.log(jobinfo);

  return (
    <div className={`jobcard-container ${jobinfo.featured && "featured"}`}>
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
        <Role role={jobinfo.role} tagHandleSelect={tagHandleSelect} />
        <Level level={jobinfo.level} tagHandleSelect={tagHandleSelect} />
        <LangSkills
          langs={jobinfo.languages}
          tagHandleSelect={tagHandleSelect}
        />
        <Tools tools={jobinfo.tools} tagHandleSelect={tagHandleSelect} />
      </div>
    </div>
  );
};

export default JobCard;

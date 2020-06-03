import React from "react";
import "./LangSkills.scss";

const LangSkills = ({ langs }) => {
  return (
    <React.Fragment>
      {langs.map((lang, index) => (
        <p key={index} className="tags">
          {lang}
        </p>
      ))}
    </React.Fragment>
  );
};

export default LangSkills;

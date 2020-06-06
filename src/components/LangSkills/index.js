import React from "react";
import "./LangSkills.scss";

const LangSkills = ({ langs, tagHandleSelect }) => {
  return (
    <React.Fragment>
      {langs.map((lang, index) => (
        <p
          key={index}
          className="tags"
          onClick={() => {
            tagHandleSelect(lang);
          }}
        >
          {lang}
        </p>
      ))}
    </React.Fragment>
  );
};

export default LangSkills;

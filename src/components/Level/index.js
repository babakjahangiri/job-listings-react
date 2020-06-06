import React from "react";

const Level = ({ level, tagHandleSelect }) => {
  return (
    <p
      className="tags"
      onClick={() => {
        tagHandleSelect(level);
      }}
    >
      {level}
    </p>
  );
};

export default Level;

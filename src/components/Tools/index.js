import React from "react";

const Tools = ({ tools, tagHandleSelect }) => {
  return (
    tools.length > 0 && (
      <React.Fragment>
        {tools.map((tool, index) => (
          <p
            key={index}
            className="tags"
            onClick={() => {
              tagHandleSelect(tool);
            }}
          >
            {tool}
          </p>
        ))}
      </React.Fragment>
    )
  );
};

export default Tools;

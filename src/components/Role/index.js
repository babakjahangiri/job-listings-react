import React from "react";

const Role = ({ role, tagHandleSelect }) => {
  return (
    <p
      className="tags"
      onClick={() => {
        tagHandleSelect(role);
      }}
    >
      {role}
    </p>
  );
};

export default Role;

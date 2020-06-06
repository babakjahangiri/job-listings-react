import React from "react";
import "./FilterBox.scss";
import iconRemove from "./../../images/icon-remove.svg";

const FilterBox = ({ tags, handleTagsRemove, handleSetClear }) => {
  //className={tags.length === 0 && "filterbox-hidden"}
  return (
    tags.length.length > 0 && (
      <div className="filterbox-container">
        <div className="filterboxtags-container">
          {tags.map((role, index) => (
            <p className="tagfilter-container" key={role.id}>
              <span>{role}</span>
              <span>
                <img src={iconRemove} alt="remove" />
              </span>
            </p>
          ))}
        </div>
        <div className="clear-container">
          <p>Clear</p>
        </div>
      </div>
    )
  );
};

export default FilterBox;

import React from "react";
import "./FilterBox.scss";
import iconRemove from "./../../images/icon-remove.svg";

const FilterBox = ({ tags, handleTagsRemove, handleSetClear }) => {
  return (
    <div className="filterbox-trasparent-container">
      {tags.length > 0 && (
        <div className="filterbox-container">
          <div className="filterboxtags-container">
            {tags.map((name, index) => (
              <p className="tagfilter-container" key={name.id}>
                <span>{name}</span>
                <span onClick={() => handleTagsRemove(name)}>
                  <img src={iconRemove} alt="remove" />
                </span>
              </p>
            ))}
          </div>
          <div className="clear-container" onClick={handleSetClear}>
            <p>Clear</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterBox;

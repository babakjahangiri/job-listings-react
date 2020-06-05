import React from "react";
import "./FilterBox.scss";
import iconRemove from "./../../images/icon-remove.svg";
const FilterBox = () => {
  return (
    <div className="filterbox-container">
      <div className="filterboxtags-container">
        <p className="tagfilter-container">
          <span>Frontend</span>
          <span>
            <img src={iconRemove} alt="remove" />
          </span>
        </p>

        <p className="tagfilter-container">
          <span>Backend</span>
          <span>
            <img src={iconRemove} alt="remove" />
          </span>
        </p>

        <p className="tagfilter-container">
          <span>HTML</span>
          <span>
            <img src={iconRemove} alt="remove" />
          </span>
        </p>
      </div>
      <div class="clear-container">
        <p>Clear</p>
      </div>
    </div>
  );
};

export default FilterBox;

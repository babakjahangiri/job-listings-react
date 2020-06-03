import React from "react";
import "./NotifyTags.scss";

const NotifyTags = (props) => {
  return (
    <React.Fragment>
      {props.new && <p className="tags-new">NEW!</p>}
      {props.featured && <p className="tags-featured">FEATURED</p>}
    </React.Fragment>
  );
};

export default NotifyTags;

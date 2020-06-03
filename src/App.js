import React from "react";
import "./scss/styles.scss";
import { Heading, JobList } from "./components";

function App() {
  return (
    <React.Fragment>
      <Heading />
      <JobList />
    </React.Fragment>
  );
}

export default App;

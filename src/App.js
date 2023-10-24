import { Fragment } from "react";
import "./App.css";
import Section from "./Section";
import MyComponent from "./MyComponent";

function App() {
  return (
    <>
      <Section
        title="Section 1번"
        content="This is the content for section 1."
        url=""
      />
      <Section
        title="Section 2번"
        content="This is the content for section 2."
      />
      <MyComponent name="김현빈" age={24} />
    </>
  );
}

export default App;

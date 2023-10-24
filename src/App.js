import { Fragment } from 'react';
import './App.css';
import Section from './Section';
import MyComponent from './MyComponent';
import Say from './Say';

function App() {
  return (
    <>
      {/* <Section
        title="Section 1번"
        content="This is the content for section 1."
        url=""
      />
      <Section
        title="Section 2번"
        content="This is the content for section 2."
      />
      <MyComponent name="김현빈" age={24}>
        안녕하세여~
      </MyComponent> */}
      <Say />
    </>
  );
}

export default App;

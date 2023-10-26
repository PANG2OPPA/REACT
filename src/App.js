import { Fragment } from 'react';
import './App.css';
import Section from './Section';
import MyComponent from './MyComponent';
import Say from './Say';
import Clock from './Clock';
import EventPractice from './onChange';
import EventHandler from './EventHandler';
import FruitSelect from './FruitSelect';
import RadioButton from './RadioButton';
import Table from './Table';
import TableMap from './TableMap';
import CreateRef from './UseRef';
import UserList from './UserList';
import Hooks1 from './Hooks1';
import Submit from './Submit';
import NameCard from './Submit';
import MemberInfo from './Hooks2';
import Counter2 from './Hooks3';

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
      {/* <Clock /> */}
      {/* <EventPractice /> */}
      {/* <EventHandler /> */}
      {/* <FruitSelect /> */}
      {/* <RadioButton /> */}
      {/* <Table /> */}
      {/* <TableMap /> */}
      {/* <CreateRef /> */}
      {/* <UserList /> */}
      {/* <TodoList /> */}
      {/* <Hooks1 /> */}
      {/* <NameCard /> */}
      {/* <MemberInfo /> */}
      <Counter2 />
    </>
  );
}

export default App;

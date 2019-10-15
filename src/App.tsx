import React from 'react';
import { Provider } from "react-redux";
import store from "./store";

import CoursesList from "./CoursesList";
import CoursesInput from "./CoursesInput";


const App: React.FC = () => {
  return (
    <Provider store={store}>
      <CoursesInput/>
      <CoursesList/>
    </Provider>
  )
}

export default App;
